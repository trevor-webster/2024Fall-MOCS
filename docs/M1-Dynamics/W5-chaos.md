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
