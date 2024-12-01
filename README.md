<div align="center">


 [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Rockstar-ExtraBold&color=F01&lines=NURO+ＭＤ+V1+ＷＨＡＴＳＡＰＰ+ＢＯＴ)](https://git.io/typing-svg)
<p align="center">
<a href="https://github.com/Tharakadilshan0423/NURO-MD1">
    <img src="https://i.imgur.com/Md3nK0I.jpeg"  width="400px">
</a>
<hr>

 <p align="center">

  <a href="https://github.com/Tharakadilshan0423/NURO-MD1">
    <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FASITHA-MD%2FASITHA-MD&count_bg=%2379C83D&title_bg=%23555555&icon=gitpod.svg&icon_color=%23E7E7E7&title=Views&edge_flat=false" alt="Views"/></a>
</hr>

<b>GET SESSION ID VIA PAIR CODE 01</b>

<a href="https://defensive-livia-nuron-1eef2f02.koyeb.app/"><img alt='Get Session ID' src='https://img.shields.io/badge/Click here to get your session id-blue?style=for-the-badge&logo=opencv&logoColor=white'/></a>

<b>COPY WORKFLOW CODE</b></br>
```
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Start application
      run: npm start
```
