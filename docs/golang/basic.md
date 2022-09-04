# Golang 基本知识

## 变量的声名方式
```
// test_var.go

package main
import (
	"fmt"
)

// 声名全局变量

var gA = 100
var gB int =200

// :=只能用在函数体内来声名
// gC:=300  报错


func main()  {
	/*
四种变量声名方式
*/

	//方法一: 声名一个变量  默认值是0
	var a int
	fmt.Println("a=",a)
	fmt.Printf("type of a = %T\n",a)

	//方法二: 声名一个变量 并初始化
	var b int =100
	fmt.Println("b=",b)

	//方法三: 初始化时可以省数据类型，通过自动匹配当前变量的数据类型
	var c =100
	fmt.Println("c=",c)

	// 方法四:(常用) 省略var关键字，直接自动匹配
	e:=100
	fmt.Println("e=",e)

	g:=3.14
	fmt.Printf("g type = %T\n",g)

	fmt.Println("gA = ",gA," gB = ",gB)
	// fmt.Println("gC = ",gC)

	// 声名多个变量
	var xx,yy int=100,200
	 fmt.Println(xx,yy)
	var kk,zz =999,"abc"
	fmt.Println(kk,zz)

	// 多行多变量声名
	var (
		vv int=9324
		bol bool =true
	)
	fmt.Println(vv,bol)
}
```

### Configuration

Can be created using `.foorc.json`.
