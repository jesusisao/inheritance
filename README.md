# 色んな言語のクラス継承とその挙動

## C#のコンパイルと実行

ちょっとした動作確認にはmonoを使うと便利です。

```
csc CSharpSample.cs
mono CSharpSample.cs
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
