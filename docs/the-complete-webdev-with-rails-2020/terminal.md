---
title: Terminal
---

In this chapter, let's get used to **"terminal"**.

## Install Terminal

### Mac
For Mac OS, terminal is already installed.

### Windows
Install from here:
https://www.microsoft.com/en-us/p/windows-terminal-preview/9n0dx20hk701?activetab=pivot:overviewtab

## What is Terminal?
> The Mac Terminal is a <mark>**command line interface (CLI)**</mark> for Mac OS X available in all OS X versions through Lion. It is also a gateway to Unix, or the underlying operating system of OS X. Terminal allows users to modify various characteristics of their Mac desktops, fonts, files and <mark>**more beyond the standard OS X graphical user interface (GUI).**</mark> It allows for total customization and command. However, if novice computer users apply modifications incorrectly, this can harm the system or lead to a loss of data.


https://www.techopedia.com/definition/28747/mac-terminal-mac-os-x


## GUI
1. Make `test-gui` folder inside `desktop`
2. Create new file `text.txt` inside `test-gui`
3. Open `text.txt`

## CLI
1. Make `test-cli` folder inside `desktop`
2. Create new file `text.txt` inside `test-cli`
3. Open `text.txt`

### Windows terminal with Powershell
```powershell title="terminal"
cd desktop
mkdir test-cli
cd test-cli
New-Item -Path . -Name "text.txt"
```

:::tip I don't recommend to create file with Powershell
- Powershell has complicated encoding system.
- This will cause a super annoying bug.
- So, I recommend you to create file inside VS code.
:::

### Mac terminal
```bash title="terminal"
cd desktop
mkdir test-cli
cd test-cli
touch "text.txt"
```