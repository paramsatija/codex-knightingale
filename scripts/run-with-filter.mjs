import { spawn } from "node:child_process";

const command = process.argv[2];
const args = process.argv.slice(3);

if (!command) {
  console.error("No command provided to run-with-filter.");
  process.exit(1);
}

const isFilteredLine = (line) =>
  line.includes("[baseline-browser-mapping] The data in this module is over two months old");

const pipeWithFilter = (stream, target) => {
  let buffer = "";

  stream.on("data", (chunk) => {
    buffer += chunk.toString();
    const parts = buffer.split(/\r?\n/);
    buffer = parts.pop() ?? "";

    for (const line of parts) {
      if (!isFilteredLine(line)) {
        target.write(`${line}\n`);
      }
    }
  });

  stream.on("end", () => {
    if (buffer && !isFilteredLine(buffer)) {
      target.write(`${buffer}\n`);
    }
  });
};

const child = spawn(command, args, {
  stdio: ["inherit", "pipe", "pipe"],
  shell: process.platform === "win32",
  env: {
    ...process.env,
    BROWSERSLIST_IGNORE_OLD_DATA: "1",
    BASELINE_BROWSER_MAPPING_IGNORE_OLD_DATA: "1"
  }
});

pipeWithFilter(child.stdout, process.stdout);
pipeWithFilter(child.stderr, process.stderr);

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  }
  process.exit(code ?? 1);
});

child.on("error", (error) => {
  console.error(error);
  process.exit(1);
});
