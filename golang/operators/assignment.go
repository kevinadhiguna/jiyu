// Reference : https://www.w3schools.com/go/go_assignment_operators.php
package main
import ("fmt")

func main()  {
	a := 5
	b := 17
	fmt.Println("a : ", a)
	fmt.Println("b : ", b)
	a += b
	fmt.Println("a += b -> ", a);

	c := 1
	d := 9
	fmt.Println("c : ", c)
	fmt.Println("d : ", d)
	d -= c
	fmt.Println("d -= c -> ", d);

	e := 11
	f := 13
	fmt.Println("e : ", e)
	fmt.Println("f : ", f)
	e *= f
	fmt.Println("e *= f -> ", e);

	g := 85
	h := 19
	fmt.Println("g : ", g)
	fmt.Println("h : ", h)
	g /= h
	fmt.Println("g /= h -> ", g);
	
	i := 113
	j := 23
	fmt.Println("i : ", i)
	fmt.Println("j : ", j)
	i %= j
	fmt.Println("i %= j -> ", i);
	
	k := 11
	l := 243
	fmt.Println("k : ", k)
	fmt.Println("l : ", l)
	k &= l
	fmt.Println("k &= l -> ", k);
	
	m := 822
	n := 198
	fmt.Println("m : ", m)
	fmt.Println("n : ", n)	
	m |= n
	fmt.Println("m |= n -> ", m);
	
	o := 9982
	p := 928
	fmt.Println("o : ", o)
	fmt.Println("p : ", p)
	o ^= p
	fmt.Println("o ^= p -> ", o);

	q := 932
	r := 122
	fmt.Println("q : ", q)
	fmt.Println("r : ", r)
	q >>= r
	fmt.Println("q >>= r -> ", q);
	
	s := 3849
	t := 776
	fmt.Println("s : ", s)
	fmt.Println("t : ", t)
	s <<= t
	fmt.Println("s <<= t ->", s);
}
