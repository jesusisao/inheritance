# 色んな言語のクラス継承とその挙動

## TypeScriptのコンパイルと実行

ちょっとした動作確認にはdenoを使うと便利です。

```
deno ts-sample.ts
```

## C#のコンパイルと実行

ちょっとした動作確認にはmonoを使うと便利です。

```
csc CSharpSample.cs
mono CSharpSample.exe
```

## Swiftのコンパイルと実行 

```
swiftc -emit-executable swift-sample.swift
./swift-sample
```

## Kotlinのコンパイルと実行

```
kotlinc KtSample.kt -include-runtime -d KtSample.jar
java -jar KtSample.jar
```

## Scalaのコンパイルと実行

```
scalac scala-sample.scala
scala ScalaSample
```

## C++のコンパイルと実行

C++11の規格の文法を用いているため、
コンパイルのバージョンを指定しないと警告が出てくる。

```
clang++ cpp_sample.cpp -std=c++11
./a.out
```
