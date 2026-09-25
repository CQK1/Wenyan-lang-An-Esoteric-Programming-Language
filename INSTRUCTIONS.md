# Wenyan-lang Instructions

## 1. Install

### Step 1: Install Node.js
Download: https://nodejs.org/

Verify:
node --version
npm --version

### Step 2: Install Wenyan CLI
npm install -g @wenyanlang/

Verify:
wenyan --help

### Step 3: Run
wenyan file_name.wy

## 2. Syntax
| Wenyan | English | Meaning |
|--------|---------|---------|
| 吾有一數 | I have a number | declare number |
| 吾有一言 | I have a string | declare string |
| 吾有一爻 | I have a boolean | declare boolean |
| 吾有一列 | I have a list | declare list |
| 曰 | says | assign value |
| 名之曰「甲」 | name it "甲" | name the variable |
| 書之 | write it | print |
| 加 | add | + |
| 減 | subtract | - |
| 乘 | multiply | * |
| 除 | divide | / |
| 所餘幾何 | what is the remainder | modulo |
| 等於 | equals | == |
| 大於 | greater than | > |
| 小於 | less than | < |
| 若...者 | if... | if |
| 若非 | if not | else |
| 也 | (end particle) | end if |
| 為是...遍 | repeat...times | for loop |
| 云云 | and so on | end loop |
| 夫 | (intro particle) | define function |
| 是矣 | that is it | end function |
| 注「...」 | note | comment |