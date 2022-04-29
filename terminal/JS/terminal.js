let userInput, terminalOutput;
let projAsk = false;
let lastCommands = [];
let rootAccess = false;

// console.log("Welcome to my website!");

const COMMANDS = {
  about:
    "If you see this terminal, that mean you can hack into the school server.<br>To make sure you are my client, please input the secret code.",
  ls:
    "&nbsp;&nbsp;Ethereum_Invoice_01&nbsp;&nbsp;&nbsp;&nbsp;Ethereum_Invoice_02&nbsp;&nbsp;&nbsp;&nbsp;Donation_Receipt",
  sudo: "user not in the sudoers file.  This incident will be reported.",
  help:
    'System commands: <span class="code">clear</span>, <span class="code">history</span>, <span class="code">open</span>, <span class="code">ls</span><br>To make sure you are my client, please input the secret code.<br>Tip: Use Up / Down arrow to go through recent commands',
  contact:
    "Form: <a href='https://zeuschiu.com' class='link'> Zeus Chiu</a><br>",
  open:"usage: open [file path]",
};

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  input = input.toLowerCase();
  lastCommands.push(input);
  let output;
  if (input.length === 0) {
    return;
  }
  if (input.indexOf("sudo") >= 0) {
    input = "sudo";
  }

  if (input === "clear" || input === "cls") {
    clearScreen();
  } else if (input === "history") {
    showHist();
  } else if (input === "github") {
    open("https://github.com/zeuscsc/");
  } else if (input==="sh love helen"||input==="helen love sh"){
    output+="Root access gained";
    rootAccess=true;
  } else if(input==="open Ethereum_Invoice_01"){
    open("https://invoice.build/invoices/58dc61f7-3645-414f-bebb-767b81957d9e");
  } else if(input==="open Ethereum_Invoice_02"){
    open("https://invoice.build/invoices/58dc61f7-3645-414f-bebb-767b81957d9e");
  } else if(input==="open Donation_Receipt"){
    open("../Donation_Receipt.svg");
  }else {
    output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
    if (!COMMANDS.hasOwnProperty(input)) {
      output += `<div class="terminal-line">command not found: ${input}</div>`;
    } else {
      output += COMMANDS[input];
    }

    terminalOutput.innerHTML = `${terminalOutput.innerHTML}<br><div class="terminal-line">${output}<br></div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
};

const key = (e) => {
  const input = userInput.innerHTML;

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = (e) => {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

function showHist() {
  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${lastCommands.join(", ")}</div>`;
}

let iter = 0;
const up = (e) => {
  if (e.key === "ArrowUp") {
    if (lastCommands.length > 0 && iter < lastCommands.length) {
      iter += 1;
      userInput.innerHTML = lastCommands[lastCommands.length - iter];
    }
  }

  if (e.key === "ArrowDown") {
    if (lastCommands.length > 0 && iter > 1) {
      iter -= 1;
      userInput.innerHTML = lastCommands[lastCommands.length - iter];
    }
  }
};

function clearScreen() {
  location.reload();
}
document.addEventListener("keydown", up);

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
