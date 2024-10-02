# ...and Chaos

<div class="flex-container">
  <div class="left-div callback">
    <h3>💡 Previously on...</h3>  
    Last week we saw how to translate a model defined in discrete time to one in continuous time, we considered the SIS model to show a simple stability analysis (and its formal equivalence to a one-species competitive Lotka-Volterra model), and we concluded by implementing code to both integrate a system of ODEs and to actually simulate the stochastic process our model wants to describe.
    <br>
    <p></p>
  </div>
  <div class="right-div reading-box">
  <h3>📚 Week 5 readings</h3>
  <ul class="reading-list">
    <li><span>📖</span> <a href="https://math.libretexts.org/Bookshelves/Scientific_Computing_Simulations_and_Modeling/Introduction_to_the_Modeling_and_Analysis_of_Complex_Systems_(Sayama)/08%3A_Bifurcations" target="_blank">Bifurcations  (Ch. 8 Sayama)</a><sup>*</sup></li>
    <li><span>📖</span> <a href="https://math.libretexts.org/Bookshelves/Scientific_Computing_Simulations_and_Modeling/Introduction_to_the_Modeling_and_Analysis_of_Complex_Systems_(Sayama)" target="_blank">Chaos  (Ch. 9 Sayama)</a><sup>*</sup></li>
    <li><span>📖</span> <a href="https://www.jstor.org/stable/3450749" target="_blank">Omnivory Creates Chaos in Simple Food Web Models  (Tanabe & Namba 2005)</a><sup>*</sup></li>
    <li><span>📖</span> <a href="https://github.com/jstonge/2024Fall-MOCS/blob/main/docs/readings/Garfinkel-2017-ch5.pdf" target="_blank">Chaos (Ch.5 Garfinkel)</a></li>
  </ul>
</div>
</div>

This week we look at examples of models with more than one effective dimension (recall that the closed-population SIS model is effectively one-dimensional) and learn to analyze them through the method of nullclines. Adding one or more dimensions, we will unlock more interesting behaviors other than attraction to or repulsion from fixed points. Things become rapidly cumbersome though, and since this is not a calculus or algebra course, we will mainly observe those behaviors by integrating our ODEs numerically. In doing so, we will even get a taste of chaos!

In the next clip, LHD provides a detailed analysis of a two-species competitive Lotka-Volterra model, showing how to anticipate the behavior of the system by finding the nullclines.

<iframe src="https://streaming.uvm.edu/embed/49970/" width="560" height="315" frameborder="0" allowfullscreen></iframe>

Next, LHD adds another species and considers a generalized three-species Lotka-Volterra model, where inter-species interaction can be either positive or negative, and not even symmetric. He shows how exploring the parameter space various bifurcations happen: from fixed points to periodic orbits to...chaos!

<iframe src="https://streaming.uvm.edu/embed/49971/" width="560" height="315" frameborder="0" allowfullscreen></iframe>

Why did we not find chaos in previous models? The reason is dimension. Previous models were one or two-dimensional and chaos is excluded in such a constraint space. In the previous clip, LHD mentioned the _strange_ attractor on which chaotic trajectories live – an attractor where trajectories are quasi-periodic, passing through points which are infinitely close to each other but never the same (if they were, the orbit would be periodic). Requiring such a quasi-recurrency leads, in 2D, to a contradiction. Indeed, starting at a point A and tracing a trajectory that loops back arbitrarily close to A, the phase space you can explore next is either one of two disconnected regions: inside or outside the loop. In both cases, the orbit can never approach A so close as it did the first time without crossing the previous quasi-loop (which can't, otherwise the system would not be deterministic!), but it will diverge from it, either spiraling in to a fixed point or out to a limit cycle, thus violating quasi-periodicity. Try to prove it with a draw – it's fun!

In 3D, a trajectory has an infinite number of possible ways to pass closeby a point, not just on the left or right of it as in 2D. This is why chaos in continuous models can be found for phase spaces of three or more dimensions. Notice that this is not the case for discrete systems: there is no problem of crossing there, for a trajectory is a sequence of jumps. The logistic map ${tex`x_{t+1} = rx_t(x_t-1)`} is perhaps the most famous example of 1D system able to show chaotic behavior. Starting with ${tex`x \in [0,1]`} and taking ${tex`r \in [0,4]`}, it maps the interval ${tex`[0,1]`} to itself. There are infinite many points in such interval, so that the system can keep jumping to a new one for the eternity – as it does when ${tex`r`} is high enough.

Next video wraps up our Module 1: Dynamics.

<iframe src="https://streaming.uvm.edu/embed/49972/" width="560" height="315" frameborder="0" allowfullscreen></iframe>

Next week we start looking at spatially-structured systems!


<div class="callout-box">
  <h3>Things to do by Thursday at noon</h3>
  <ul class="checklist">
    <li><input type="checkbox" id="task1"><label for="task1">Quiz 5</label></li>
  </ul>
</div>

---

## Bonus content

### Maximal Lyapunov exponent

One of the characteristic features of a chaotic system is _sensitivity to initial conditions_. If in a chaotic regime (notice that the phase space of a system can both have chaotic and regular regions), no matter how close two initial conditions are, their following trajectories will diverge from each other. A way to quantify how fast such divergence happens is computing the set of Lyapunov exponents. For a system leaving in an ${tex`n`}-dimensional phase space, you get ${tex`n`} exponents, one for each direction you can shift from a point. Nonetheless, to know whether two trajectories are going to diverge or not, it is enough to know the value of the maximal Lyapunov exponent (MLE): if this is positive, there exists at least one direction along which the trajectories will depart from each other.

The MLE is defined as follows. Consider a continuous map ${tex`\dot{x} = f(x(t))`}, and two close initial (${tex`t=0`}) points ${tex`x_0`} and ${tex`x_0'=x+\varepsilon`}, with ${tex`\varepsilon`} arbitrarily small but nonzero. (Notice that in general ${tex`x`} is a vector of dimension ${tex`n`}; and remember ${tex`n>2`} is a necessary condition for chaos in continuous systems.) After a time ${tex`t`}, ${tex`x_0`} is mapped to ${tex`x(t)`}, and ${tex`x_0'`} to ${tex`x'(t)`}. Suppose now to relate the difference between the two trajectories at time ${tex`t`}, ${tex`\vert x'(t) - x(t)\vert`}, with the initial difference at time ${tex`0`}, ${tex`\vert\varepsilon\vert`}, as
```tex
\begin{equation}
\vert x'(t) - x(t)\vert = \vert\varepsilon\vert e^{\lambda t} \tag{1}
\end{equation}
```
The parameter ${tex`\lambda`} is the MLE: if positive, the two trajectories depart (exponentially fast); if negative, they converge (exponentially fast). Equation (1) assumes a steady behavior for the difference ${tex`\vert x'(t) - x(t)\vert`}. However, due to the nonlinearity of the dynamics, that difference will sometime shrink and sometimes grow. What Lyapunov exponents measure is the average behavior over large time scales. We thus want to take two limits: ${tex`\vert\varepsilon\vert \rightarrow 0`} – arbitrarily close initial points – and ${tex`t \rightarrow \infty`} – long-time behavior. Inverting Equation (1), we thus have
```tex
\begin{equation}
\lambda = \lim_{t\rightarrow \infty} \lim_{\vert\varepsilon\vert \rightarrow 0} \frac{1}{t} \ln\left(\frac{\vert x'(t) - x(t)\vert}{\vert\varepsilon\vert}\right) \tag{2}
\end{equation}
```

In the case of a discrete map ${tex`x_{t} = f(x_{t-1})`}, ${tex`t`} taking integer values, we can easily make Equation (2) a bit more explicit. Remember that chaos is possible even in one dimension for discrete systems, so for simplicity let us assume ${tex`x`} to be just a scalar. Observe that ${tex`x_{t}`} is given by applying ${tex`t`} times the map ${tex`f`} to ${tex`x_0`}:
```tex
\begin{equation}
x_t = \underbrace{f \circ f \circ \cdots \circ f}_{t\ \text{times}}(x_0) \equiv g^{(t)}(x_0)  \tag{3}
\end{equation}
```
where ${tex`f \circ f(x) \equiv f(f(x))`}, and we defined the function ${tex`g^{(t)}`} as being the composition of ${tex`t`} functions ${tex`f`}. Repeating the same for ${tex`x_0'=x+\varepsilon`}, we can write ${tex`x_t' = g^{(t)}(x_0') = g^{(t)}(x_0+\varepsilon)`}. Expanding the latter according to its Taylor series around the point ${tex`x_0`} and repeatedly using the relation ${tex`g^{(t)} = f \circ g^{(t-1)}`}, we get
```tex
\begin{align}
\underbrace{g^{(t)}(x_0+\varepsilon)}_{x'_t} &= \underbrace{g^{(t)}(x_0)}_{x_t} + \varepsilon \left.\frac{dg^{(t)}}{dx}\right\vert_{x = x_0} \notag \\
                         &= x_t + \varepsilon \left.\frac{d}{dx}\left(f \circ g^{(t-1)}\right)\right\vert_{x = x_0} \notag \\
                         &= x_t + \varepsilon \left.\frac{df}{dx}\right\vert_{x = \underbrace{g^{(t-1)}(x_0)}_{x_{t-1}}} \left.\frac{dg^{(t-1)}}{dx}\right\vert_{x = x_0} \notag \\
                         &= x_t + \varepsilon \left.\frac{df}{dx}\right\vert_{x = x_{t-1}} \left.\frac{df}{dx}\right\vert_{x = \underbrace{g^{(t-2)}(x_0)}_{x_{t-2}}} \left.\frac{dg^{(t-2)}}{dx}\right\vert_{x = x_0} \notag \\
                         &= x_t + \varepsilon \left.\frac{df}{dx}\right\vert_{x = x_{t-1}} \left.\frac{df}{dx}\right\vert_{x = x_{t-2}} \cdots \left.\frac{df}{dx}\right\vert_{x = x_0}  \notag \\
                         &= x_t + \varepsilon \prod_{\tau = 0}^{t-1} \left.\frac{df}{dx}\right\vert_{x = x_{\tau}} \tag{4}
\end{align}
```
An analogous equation to Equation (1) thus leads to
```tex
\begin{equation}
\lambda = \lim_{t\rightarrow \infty} \frac{1}{t} \ln\left(\prod_{\tau = 0}^{t-1} \left\vert\left.\frac{df}{dx}\right\vert_{x = x_{\tau}}\right\vert\right) = \lim_{t\rightarrow \infty} \frac{1}{t} \sum_{\tau = 0}^{t-1} \ln\left(\left\vert\left.\frac{df}{dx}\right\vert_{x = x_{\tau}}\right\vert\right) \tag{5}
\end{equation}
```
From Equation (5) we can see that the MLE is a temporal average.