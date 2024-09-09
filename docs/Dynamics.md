---
toc: true
---

# Module 1: Dynamics

Differential equations are the foundation of modern science. In this class, we'll approach the math gently, but we won't shy away from it either. In this section, we provide additional materials to help you familiarize yourself with or learn more about differential equations. Note that this section is intended to motivate you to learn about the topic. While these videos can help you gain some intuition, mathematics is fundamentally a know-how. To truly get it, you need to get your hands dirty.

### Motivational videos

 - [3b1b's tourist's guide to Differential Equations](https://www.youtube.com/watch?v=p_di4Zn4wz4&list=PLZHQObOWTQDNPOjrT6KVlfJuKtYTftqH6)
 - [Zach Star's  This is why you're learning differential equations ](https://www.youtube.com/watch?v=ifbaAqfqpc4)
 - [Trefor Bazett's ODEs series](https://www.youtube.com/playlist?list=PLHXZ9OQGMqxde-SlgmWlCmNHroIWtujBw)
 - [3b1b Simulating an epidemic (SIR model)](https://www.youtube.com/watch?v=gxAaO2rsdIs)

### Additional readings

  - [Chaos: Making a New Science (Gleick 2008)](https://www.penguinrandomhouse.ca/books/321477/chaos-by-james-gleick/9780143113454): Amazing book on Chaos theory's origin story.
  - [ A Biologist's Guide to Mathematical Modeling in Ecology and Evolution (Otto and Day 2007)](https://press.princeton.edu/books/hardcover/9780691123448/a-biologists-guide-to-mathematical-modeling-in-ecology-and-evolution?srsltid=AfmBOopJ4i2Ls1pXkGaEJGDc61Vvol-dJADY9XJrU0q3MKIJuJTfg0D6): Great textbook that strikes a good balance between accessibility and the mathematics of dynamical systems in ecology.
  - [Nonlinear Dynamics and Chaos 3rd ed (Strogatz 2024)](https://www.routledge.com/Nonlinear-Dynamics-and-Chaos-With-Applications-to-Physics-Biology-Chemistry-and-Engineering/Strogatz/p/book/9780367026509?srsltid=AfmBOoqrabgNKvlTDyAQiCCuPgrnIIKeCtczqcLkb9AFEFmdWw72l-fA): Go-to textbook for mathematical dynamical systems.
  - [Primer of Ecological Theory 1st Edition (Roughgarden 1998)](https://books.google.ca/books/about/Primer_of_Ecological_Theory.html?id=PmHwAAAAMAAJ&source=kp_book_description&redir_esc=y): Everything you ever wanted to know on modeling prey-predator interactions.
  - [Modeling Life: The Mathematics of Biological Systems (Garfinkel et al. 2017)](https://link.springer.com/book/10.1007/978-3-319-59731-7): New generation of textbook introducing mathematical modeling after Otto & Day.
    - [github](https://modelinginbiology.github.io/)

### Courses

 - [Liz Bradley's intro to ODES](https://www.youtube.com/watch?v=aZRqW3XZ_6U&list=PLF0b3ThojznQ9xUDm-EbgFAnzdbeDVuSz&index=24)
 - [Alan Garfinkel's UCLA modeling class](https://www.youtube.com/@uclamodelingclass3003)
 - [Introduction to Computational Thinking](https://computationalthinking.mit.edu/Fall24/): see modules on epidemic and climate modeling.
 - [differential-equations (khan academy)](https://www.khanacademy.org/math/differential-equations)
 - [Math 113B: Intro to Mathematical Modeling in Biology (UCI)](https://ocw.uci.edu/lectures/math_113b_lec_02_intro_to_mathematical_modeling_in_biology_bacterial_growth.html): I remember first learning about dynamical systems. For some reason, this course by Germán A. Enciso at UC Irvine really stuck with me.

### Interactive notebooks

 - [Mike Bostock's Predator and Prey notebook](https://observablehq.com/@mbostock/predator-and-prey)
 - [Mark Maclure's First order, autonomous systems of ODEs notebook](https://observablehq.com/@mcmcclur/first-order-autonomous-systems-of-odes)
 - [Jo Wood's Phase Portraits](https://observablehq.com/@jwolondon/phaseportrait)

# Consolidating the basics

This section is for students looking to refresh their mathematical skills. They provide additional references to mathematical concepts that are so fundamental, it's important to have a good grasp of them.

## Solving differential equations

<div class="caution">
Work in progress, there might be mistakes.
</div>

Even though we won't solve that many differential equations by hand, you will encounter the idea over and over again. Khan, Brillant, and Paul's online notes offer many exercices if you want to practices solving differential equations.

  - [Ordinary Differential Equations: Intro To ODEs (Complexity Explorer)](https://www.youtube.com/watch?v=yGdGna_4Gwc)
  - [Math 113B. Lec. 01. Intro to Mathematical Modeling in Biology (UCI)](https://ocw.uci.edu/lectures/math_113b_lec_01_intro_to_mathematical_modeling_in_biology_introduction_to_the_course.html)
  - [Differential Equations - Modeling (Brillant)](https://brilliant.org/wiki/differential-equations-modeling/)
  - [Exponential models & differential equations (Khan)](https://www.khanacademy.org/math/differential-equations/first-order-differential-equations/exponential-models-diff-eq/v/modeling-population-with-simple-differential-equation)
  - [Section 2.1 : Linear Differential Equations (Paul's Online Notes)](https://tutorial.math.lamar.edu/Classes/DE/Linear.aspx)
  - [1.1 Integrals as solutions](https://web.uvic.ca/~tbazett/diffyqs/integralsols_section.html)
  - [Exponential growth and decay: a differential equation](https://mathinsight.org/exponential_growth_decay_differential_equation_refresher)


Here is my best shot at explaining the meaning of solving differential equations from scratch. Recall what solving mean in elementary school (yes, that far). When you solve for _x_, as in ${tex`2x - 4 = 10`}, you find a number. Here 7. At the risk of saying the obvious, you find the following

```js
Plot.plot({
  width: 640,
  height: 200,
  grid: true,
  nice: true,
  y: { domain: [-15, 15] },
  marks: [
    Plot.line(
      build_samples((x) => 2*x - 4, -15, 15),
      {
        strokeWidth: 3,
        stroke: "steelblue"
      }
    ),
    Plot.dot([[7, 10]], { fill: "black", r: 5 } ),
    Plot.ruleX([0]),
    Plot.ruleY([0]),
    Plot.axisY({ x: 0 })
  ]
})
```

Later on, even if you don't want to remember it, you learn about derivative. For instance, the derivative ${tex`f(x) = 2x - 4`} is defined as a limit, or ${tex`f'(x) = \lim_{h\rightarrow 0} = \frac{f(x+h) - f(x)}{h}`}. Plugging in our function, we get ${tex`f'(x) = \lim_{h\rightarrow 0} = \frac{(2(x+h)-4)-(2x-4)}{h} = 2`}. Later in the same course, you learn a shortcut; ${tex`(f + g) = f' + g'`} (the sum rule). Using the sum rule, and perhaps the Leibniz notation, you now think of derivatives as ${tex`df/dx \equiv f'(x) = d(2x)/dx - d(4)/dx = 2 - 0 = 2`}. You think to yourself; yes, I remember that.

Now, people say that solving differential equations mean that you solve for _functions_. This is where most people get lost. What does that mean? How is this idea related to modeling? This is best understood with an example. Say that we have the following relationship:

```tex
\frac{dn(t)}{dt} = b n(t)
```

where ${tex`n(t)`} is often use to talk about the size of a population at time ${tex`t`}. Take a second to understand what this equation means. The left hand side is a derivative, that is, the rate of change of ${tex`n(t)`} at time ${tex`t`}. But the right hand side is not a number, it is "some function of ${tex`n(t)`}", here ${tex`bn(t)`}. 

In the context of population growth, we are saying that the change in the population size ${tex`n(t)`} is proportional to the size of the population itself. The parameter ${tex`b`} is the growth rate, i.e., how many offspring an individual produces (on average) per unit of time (notice ${tex`b`} has dimension equal to the inverse of time, say 1/seconds or 1/days). Multiplying by the current number of individuals in the population, namely ${tex`n(t)`}, we get the rate of change of the whole population. Therefore, the bigger the population, the bigger the change. This is a modeling choice! As you will see in this module, we will use graph diagrams to represent those choices, e.g.,

${mermaid`graph TD 
      n--b⋅n-->n;`}

I think it is worth reiterating; from the example above, you should see that (1) we have an unknown function ${tex`n(t)`} and that (2) the latter and its derivative are connected by a relation ${tex`dn(t)/dt = b n(t)`}. In this particular case, the educator will tell you something like; "think, what function _do you know_ that is equal to its derivative?" Surprise, this is the exponential function:


```tex
n(t) = a \cdot e^{bt}
```

Congrats, you just solved the mystery! What? WHY? How are we supposed to know that. Where is the ${tex`a`} coming from and what is its meaning? First, if you take ${tex`t=0`} in the equation above, given that ${tex`e^0 = 1`}, you find ${tex`n(0) = a`}. That is, ${tex`a`} is the initial size of the population (one usually parametrizes time so that ${tex`t=0`} is the instant at which the system comes to exist, but it is just a convention; nothing deep about it), and so we can rewrite the solution explicitly as ${tex`n(t) = n(0) \cdot e^{bt}`}. Second, they say, you should remember that the exponential function ${tex`e^{x}`} is a function for which the rate of change at any point (${tex`x`}) is equal to itself, that is, ${tex`de^{x}/dx = e^{x}`} (more generally, using the chain rule for derivatives, ${tex`de^{kx}/dx = d(kx)/x \cdot de^{kx}/d(kx) = k e^{kx}`}). But it does feel like cheating. 

In a "Differential equations" class, you learn to solve differential equations using various strategies. You learn that the above is a [separable (first-order) differential equation](https://tutorial.math.lamar.edu/Classes/DE/Separable.aspx), which means that it can be cast in the form ${tex`dy/dt = g(y)h(t)`}. Our equation is the most trivial of this kind, for we have ${tex`g(y) = by`} and ${tex`h(t) = 1`} (i.e., no explicit dependence on the independent variable, ${tex`t`}). We thus proceed as follows (let us omit the dependence on ${tex`t`} to ease the notation),

```tex
\begin{equation}
  \begin{split}
  \frac{dn}{dt} &= bn \\
  \frac{1}{n}\frac{dn}{dt} &= bn\frac{1}{n} \\
  \Rightarrow \frac{1}{n}dn &= bdt \\
  \end{split}
\end{equation}
```

We first divided both sides by ${tex`n`}. Then, to get to the third line, we used the definition of _differential_ ${tex`dn(t) = (dn/dt) \cdot dt`} and substituted the expression for ${tex`dn/dt`} (that we read from the first line). Now that we have one side in terms of ${tex`n`}, and the other in terms of ${tex`t`}, we integrate (or anti-derivate if you prefer) on both sides:

```tex
\begin{equation}
  \begin{split}
  \int \frac{1}{n}dn &= \int bdt \\
  \ln |n| &= bt + c \\
  |n| &= n = e^{bt + c} = e^{c} \cdot e^{bt} = a \cdot e^{bt} \ \ \ \ (n \geq 0)
  \end{split}
\end{equation}
```

defined ${tex`a = e^{c}`}, which is the same as above (see [this refresher if you want to keep going](https://mathinsight.org/exponential_growth_decay_differential_equation_refresher))! In [Otto and Day (p.24)](https://github.com/jstonge/2024Fall-MOCS/blob/main/docs/readings/OttoDay-2007-Ch2.pdf), they explain how _derivatives_ and _differential equations_ are related, which I think is often confusing to students:

Do you have more examples? Click on 'view Source' in the top right corner of the page, and propose your changes on the Git repository by clicking the ✎ icon.

```js
// The main function
// This function breaks the initial interval into N subintervals.
// It then checks the value at the midpoint of each subinterval.
// If the angle between the two segments formed by approximating
// the function over the first half and the second half is greater
// than 0.01 radians, then the interval is subdivided.
// Proceed recursively up to max_depth.

function build_samples(f, a, b, opts = {}) {
  let { N = 9, max_depth = 6 } = opts;
  let dx = (b - a) / N;
  let root_intervals = Array.from({ length: N }).map(
    (_, i) => new Interval(a + i * dx, a + (i + 1) * dx, 0)
  );
  root_intervals.forEach((I) => {
    I.fa = f(I.a);
    I.fb = f(I.b);
  });
  root_intervals.reverse();

  let stack = root_intervals;
  let cnt = 0;
  let pts = [];
  let nodeRight, nodeLeft;
  while (stack.length > 0 && cnt++ < 100000) {
    let node = stack.pop();
    if (test(f, node, opts)) {
      let midpoint = node.midpoint;
      let new_depth = node.depth + 1;
      if (new_depth <= max_depth) {
        let a_left = node.a;
        let b_left = midpoint;
        nodeLeft = new Interval(a_left, b_left, new_depth);
        nodeLeft.fa = f(a_left);
        nodeLeft.fb = f(b_left);
        node.left = nodeLeft;

        let a_right = midpoint;
        let b_right = node.b;
        nodeRight = new Interval(a_right, b_right, new_depth);
        nodeRight.fa = f(a_left);
        nodeRight.fb = f(b_left);
        node.right = nodeRight;

        stack.push(nodeRight);
        stack.push(nodeLeft);
      } else {
        pts.push(node.a);
      }
    } else {
      pts.push(node.a);
    }
  }
  pts.push(b);
  //  pts = pts.map(x => ({ x: x, y: f(x) }));
  pts = pts.map((x) => [x, f(x)]);

  if (opts.show_roots) {
    let function_roots = [];
    pts.forEach(function (o, i) {
      if (i < pts.length - 1 && Math.sign(o.y) != Math.sign(pts[i + 1].y)) {
        function_roots.push((o.x + pts[i + 1].x) / 2);
      }
    });
    pts.function_roots = function_roots;
  }
  return pts;
}
```

```js
function test(f, I, opts = {}) {
  let { angle_tolerance = 0.01, check_roots = false } = opts;
  let a = I.a;
  let b = I.b;
  let dx2 = (b - a) / 2;
  let m = (a + b) / 2;
  let fm = f(m);
  I.midpoint = m;
  I.f_mid = fm;
  if (check_roots && Math.sign(I.fa) != Math.sign(I.fb)) {
    return true;
  }
  let alpha = Math.atan((I.f_mid - I.fa) / dx2);
  let beta = Math.atan((I.fb - I.f_mid) / dx2);
  return Math.abs(alpha - beta) > angle_tolerance;
}
```

```js
class Interval {
  constructor(a, b, depth) {
    this.a = a;
    this.b = b;
    this.depth = depth;
  }
}
```
