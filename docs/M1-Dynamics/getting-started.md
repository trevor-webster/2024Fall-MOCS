---
toc: true
---
# Module 1: Dynamics

Differential equations are the foundation of modern science. In this class, we'll approach the math gently, but we won't shy away from it either. In this section, we provide additional materials to help you familiarize yourself with or learn more about differential equations. Note that this section is intended to motivate you to learn about the topic. While these videos can help you gain some intuition, mathematics is fundamentally a know-how. To truly get it, you need to get your hands dirty.

### Courses

 - [Liz Bradley's intro to ODES](https://www.youtube.com/watch?v=aZRqW3XZ_6U&list=PLF0b3ThojznQ9xUDm-EbgFAnzdbeDVuSz&index=24)
 - [Introduction to Computational Thinking](https://computationalthinking.mit.edu/Fall24/): see modules on epidemic and climate modeling.
 - [differential-equations (khan academy)](https://www.khanacademy.org/math/differential-equations)
 - [Math 113B: Intro to Mathematical Modeling in Biology (UCI)](https://ocw.uci.edu/lectures/math_113b_lec_02_intro_to_mathematical_modeling_in_biology_bacterial_growth.html): I remember first learning about dynamical systems. For some reason, this course by Germán A. Enciso at UC Irvine really stuck with me.

### Motivational videos

 - [3b1b's tourist's guide to Differential Equations](https://www.youtube.com/watch?v=p_di4Zn4wz4&list=PLZHQObOWTQDNPOjrT6KVlfJuKtYTftqH6)
 - [Zach Star's  This is why you're learning differential equations ](https://www.youtube.com/watch?v=ifbaAqfqpc4)
 - [Trefor Bazett's ODEs series](https://www.youtube.com/playlist?list=PLHXZ9OQGMqxde-SlgmWlCmNHroIWtujBw)
 - [3b1b Simulating an epidemic (SIR model)](https://www.youtube.com/watch?v=gxAaO2rsdIs)

### Interactive notebooks

 - [Mike Bostock's Predator and Prey notebook](https://observablehq.com/@mbostock/predator-and-prey)
 - [Mark Maclure's First order, autonomous systems of ODEs notebook](https://observablehq.com/@mcmcclur/first-order-autonomous-systems-of-odes)
 - [Jo Wood's Phase Portraits](https://observablehq.com/@jwolondon/phaseportrait)

# Consolidating the basics

This section is for students looking to refresh their mathematical skills. They provide additional references to mathematical concepts that are so fundamental, it's important to have a good grasp of them.

## Solving differential equations

Even though we won't solve that many differential equations by hand, you will encounter the idea over and over again. Khan, Brillan, and Paul's online notes offer many exercices if you want to practices solving differential equations.

  - [Ordinary Differential Equations: Intro To ODEs (Complexity Explorer)](https://www.youtube.com/watch?v=yGdGna_4Gwc)
  - [Math 113B. Lec. 01. Intro to Mathematical Modeling in Biology (UCI)](https://ocw.uci.edu/lectures/math_113b_lec_01_intro_to_mathematical_modeling_in_biology_introduction_to_the_course.html)
  - [Differential Equations - Modeling (Brillant)](https://brilliant.org/wiki/differential-equations-modeling/)
  - [Exponential models & differential equations (Khan)](https://www.khanacademy.org/math/differential-equations/first-order-differential-equations/exponential-models-diff-eq/v/modeling-population-with-simple-differential-equation)
  - [Section 2.1 : Linear Differential Equations (Paul's Online Notes)](https://tutorial.math.lamar.edu/Classes/DE/Linear.aspx)
  - [1.1 Integrals as solutions](https://web.uvic.ca/~tbazett/diffyqs/integralsols_section.html)

In [Otto and Day (p.24)](), they provide that explanation that I don't think I could any better. Here is the box:

<div class="math-box">
<strong>Box 2.2: Derivatives and Differential Equations</strong>

Calculus is the mathematical study of rates of change. The most important concepts and rules
of calculus are summarized in Appendix 2, including formulas for differentiating and integrating
 a variety of functions. For example, the derivative of the polynomial ${tex`y = ax^2 + bx + c`} with
respect to x is ${tex`dy/dx = 2ax + b`}. Here, the rate of change of the <em>dependent</em> variable y is a function
only of the independent variable x. In many biological problems, however, the rate of change of
the dependent variable is a function of the dependent variable itself, e.g., ${tex`dy/dx = \alpha y + \beta`}. Notice
that the variable on the right-hand side is y not x. An equation relating the derivative of a vari-
able to a function of the variable itself is called a differential equation. Equations (2.8)–(2.10) are
differential equations. For example, in equation (2.8), the derivative of the dependent variable
describing the number of tree branches, ${tex`n(t)`}, with respect to the independent variable (time t) is
a function of ${tex`n(t)`}, not t. Differential equations naturally arise in continuous-time biological
models because we often expect the rate of change of a variable to be a function of its current
value. For example, large trees can have more new branches, a cat can eat more mice if there are
more mice available, and more people can catch the flu if there are more susceptible people
within the population.

A derivative or differential equation describes how a variable changes. But what we usually
want to know is the value of the dependent variable (e.g., ${tex`n(t)`}) as a function of the independent
variable (e.g., t). In a typical calculus course, we are taught how to solve for y by taking the anti-
derivative or integral of both sides. In other words, we could solve the equation ${tex`dy/dx = 2ax + b`}
for y(x) by integrating both sides with respect to x to obtain its solution, ${tex`y = ax^2 + bx + c`} (see
Appendix 2), which gives us the value of y for any value of x. A common error that students
make when they first encounter differential equations is to integrate the left-hand side of an
equation like ${tex`dn(t)/dt = bn(t)`} with respect to t but the right-hand side with respect to n(t). This
would give ${tex`n(t) = bn(t)^2/2`}. To see that this is incorrect, take the derivative of both sides with
respect to t (see Appendix 2). This would give ${tex`dn(t)/dt = bn(t)dn(t)/dt`}, which incorrectly has
${tex`dn(t)/dt`} on the right-hand side. The error in this procedure crept in when we took the anti-
derivative of the left-hand side with respect to t, but the antiderivative of the right-hand side
with respect to a different variable, ${tex`n(t)`}. To solve for ${tex`n(t)`} we would have to take the antideriva-
tive of both sides with respect to t, i.e.,

```tex
\int{\frac{dn(t)}{dt}dt} = \int{bn(t)dt}
```

The left-hand integral is ${tex`n(t)`}, as before, but we cannot evaluate the right-hand integral because
doing so requires ${tex`n(t)`}, which is what we are trying to find. In Chapter 6, we will see how to
obtain solutions to certain types of differential equations, like the ones presented in this chap-
ter. For now, it is enough to recognize the distinction between derivatives and differential equa-
tions and to remember that care must be taken when integrating differential equations.
Before leaving the subject, it is worth mentioning that the term “differential equation”
encompasses several types of equations, all of which arise in biology. Differential equations can
be written as functions of more than one dependent variable. For example, in our flu model, the
differential equation (2.10a) for the number of people with the flu, ${tex`dn(t)/dt`}, will depend on both
the number of people with the flu, ${tex`n(t)`}, and the number of susceptible individuals in the population, 
${tex`s(t)`}. Differential equations can also be written as functions of both the dependent variable
${tex`n(t)`} and the independent variable t. Such differential equations arise whenever we expect a variable
 to change as a function both of its current value and of time. For example, in a seasonal
environment, the budding rate of a tree should depend on the time of year as well as on the
number of branches on a tree. We can model this by treating b as some function of time, ${tex`b(t)`},
rather than a constant. In addition, differential equations might depend on the past state of a
variable as well as (or instead of ) its current state. For example, in the tree branching example,
the production of new branches at time t might depend on the total number of branches
days ago, or ${tex`n(t - \tau)`}, as these branches are now large enough to branch again. Revising equation (2.8)
gives ${tex`dn(t)/dt = bn(t - \tau)`}. Such equations, known as “delay differential equations,” arise naturally
 when describing biological processes involving time lags.

All of the above examples have only one independent variable (time). These fall into the cat-
egory known as “ordinary differential equations” (ODE). Many biological problems involve more
than one independent variable (e.g., space as well as time), and such differential equations are
known as “partial differential equations” (PDE).
</div>

--- 

p.s. Do you have more examples? Click on 'view Source' in the top right corner of the page, and propose your changes on the Git repository by clicking the ✎ icon.