# Continuous-time models
<div class="flex-container">
  <div class="left-div callback">
    <h3>💡 Previously on...</h3>  
    <p>Last week we saw how to formalize (in the simplest possible way) our modeling choices in the form of difference equations. Thinking of a system's evolution in discrete time is generally easier, which helps to formalize it. Also, the finite resolution with which we observe or measure a system in reality makes data discrete and thus more promptly interpreted via a discrete-time formulation. However, a finite timestep allows multiple processes to occur simultaneously, and we showed how this can lead to incompatible events which, to be avoided, require us to force a certain temporal ordering.</p>
    <br>
    <p>We showed through an example how, thanks to infinitesimal timesteps allowing for only one event at a time, continuous-time models solve that problem by construction. In particular, we introduced Poisson processes, a basic type of stochastic process, essential to model systems in virtually any field.</p>
  </div>
  <div class="right-div reading-box">
    <h3>📚 Week 4 readings</h3>
    <ul class="reading-list">
    <li><span>📖</span> <a href="https://math.libretexts.org/Bookshelves/Scientific_Computing_Simulations_and_Modeling/Introduction_to_the_Modeling_and_Analysis_of_Complex_Systems_(Sayama)/06%3A_ContinuousTime_Models_I__Modeling" target="_blank">Continuous-Time Models I - Modeling  (Ch. 6 Sayama)</a><sup>*</sup></li>
    <li><span>📖</span> <a href="https://math.libretexts.org/Bookshelves/Scientific_Computing_Simulations_and_Modeling/Introduction_to_the_Modeling_and_Analysis_of_Complex_Systems_(Sayama)/07%3A_ContinuousTime_Models_II__Analysis" target="_blank">Continuous-Time Models II - Analysis  (Ch. 7 Sayama)</a><sup>*</sup></li>
    <li><span>📖</span> <a href="https://brightspace.uvm.edu/content/enforced/89569-202409-AM-Crosslisted/csfiles/home_dir/courses/202209-0824C-Merged/NatureMethods_Model1.pdf?ou=89569" target="_blank">Modeling Infectious Epidemics</a><sup>*</sup></li>
    <li><span>📖</span> <a href="https://brightspace.uvm.edu/content/enforced/89569-202409-AM-Crosslisted/csfiles/home_dir/courses/202209-0824C-Merged/NatureMethods_Model2.pdf?ou=89569" target="_blank">Modeling Infectious Epidemics – SEIRS Model</a><sup>*</sup></li>
    </ul>
  </div>
</div>

This week, we first show how to go from a discrete-time to a continuous-time formulation of a model, namely, from difference to differential equations. We will get used to continuous-time models by building and analyzing a few of them. We will then learn how to integrate differential equations in a computer and eventually how to simulate a dynamics unfolding in continuous time.

In the next clip, LHD shows how translate a discrete-time SIS model in continuous time.

<iframe src="https://streaming.uvm.edu/embed/49966/" width="560" height="315" frameborder="0" allowfullscreen></iframe>

Derived the continuous-time model, he next shows how to find the equilibria and determine their stability.

<iframe src="https://streaming.uvm.edu/embed/49967/" width="560" height="315" frameborder="0" allowfullscreen></iframe>

SIS and SI dynamics are pretty special nonlinear models, for they are simple enough to be solved exactly (specifically, we can find a closed expression for I(t) valid at all times; see Bonus content below). In most cases – and "most" is an euphemism here – we are not able to do it, and our only possibility to watch the modeled system evolving is integrating the equations numerically. In the next clip, LHD introduces two basic methods of numerical integration (Euler's and Heun's methods). In class, we will see how to implement such methods in Python.

<iframe src="https://streaming.uvm.edu/embed/49968/" width="560" height="315" frameborder="0" allowfullscreen></iframe>

Whether we want to explore the behavior of a stochastic system or test how well our model does in predicting that behavior, we need a way to simulate the dynamics. While in discrete time we know when any of the next events may occur – we only have to test whether or not it does –, in continuous time we have a continuous distribution of times at which the next event could take place. (This distribution exists also in discrete time, but it has a trivial form: a single peak at time ${tex`Δt`}.) In the clip below, LHD shows how to sample such distribution. 

<iframe src="https://streaming.uvm.edu/embed/49969/" width="560" height="315" frameborder="0" allowfullscreen></iframe>


<div class="callout-box">
  <h3>Things to do by Thursday at noon</h3>
  <ul class="checklist">
    <li><input type="checkbox" id="task1"><label for="task1">Quiz 4</label></li>
  </ul>
</div>


---

### Solving the SI(S) model

Let us briefly rederive the equation for the SIS model in the well-mixing or mean-field approximation – it is a good exercise. We assume that each of the ${tex`N`} individuals interacts with ${tex`k`} random individuals per time unit (e.g., per hour). Each of the ${tex`k`} contacts of each of the ${tex`I`} infected individuals in the population has probability ${tex`S/N`} of being susceptible. New infections are thus produced at rate ${tex`\beta k I (S/N)`}, while infected individuals recover at rate ${tex`\alpha`}. Considering a closed population (hence ${tex`S=N-I`}), we get the following dynamic equation,
```tex
\begin{equation}
\frac{dI}{dt} = \beta k \frac{S}{N} I - \alpha I = (\beta k - \alpha)I - \frac{\beta k}{N} I^2
\tag{1}
\end{equation}
```
Rescaling ${tex`\beta`} via the mapping ${tex`\beta k/N \rightarrow \beta`}, we get the equivalent, but more coincise equation
```tex
\begin{equation}
\frac{dI}{dt} = (\beta N - \alpha)I - \beta I^2
\tag{2}
\end{equation}
```
Notice that an SI dynamics is obtained by setting ${tex`\alpha=0`} (no recovery). The equation above is a second-order ODE of the family of _Bernoulli differential equations_. This kind of ODEs can be solved exactly by transforming them into linear ODEs. Here is the trick. Define ${tex`y = I^{-1}`}, hence ${tex`I = y^{-1}`}, and substitute in the equation above. Notice ${tex`dI(t)/dt = dI/dy \cdot dy/dt = -y^{-2}\cdot dy/dt`}, from which,
```tex
-\frac{1}{y^2}\frac{dy}{dt} = \frac{1}{y}(\beta N - \alpha) - \frac{1}{y^2}\beta
```
Multuplying both sides by ${tex`-y^2`}, we get the sought linear equation,
```tex
\frac{dy}{dt} = -(\beta N - \alpha)y + \beta
\tag{3}
```
We have already seen how to solve this (reminder: solve first the homogeneous equation with no constant term, then solve the full equation by letting the factor in front of the exponential you got to depend on time); we get the solution
```tex
y(t) = \frac{\beta N}{\beta N-\alpha} + \left(y(0) - \frac{\beta N}{\beta N-\alpha}\right) e^{-(\beta N-\alpha)t}
```
From ${tex`I = y^{-1}`}, multiplying numerator and denominator by ${tex`I(0)(\beta N -\alpha)/\beta N`}, we get the solution
```tex
I(t) = \frac{\beta N-\alpha}{\beta N} \frac{I(0)}{I(0)+(\frac{\beta N-\alpha}{\beta N}-I(0))e^{-(\beta N-\alpha)t}}
```
First, notice that setting ${tex`\alpha = 0`} provides the solution for the SI model. Second, considered ${tex`\alpha \neq 0`}, we can recast the expression above in terms of the basic reproduction number, ${tex`R_0 = \beta N/\alpha`}. Recall that ${tex`(\beta N-\alpha)/\beta N = R_0/(R_0-1)`} is the equilibrium point the system reaches when ${tex`\beta N>\alpha`} (i.e., ${tex`R_0 > 1`}). We can thus express the solution as
```tex
I(t) = \frac{R_0-1}{R_0} \frac{I(0)}{I(0)+\left(\frac{R_0-1}{R_0}-I(0)\right) e^{-\beta\left(\frac{R_0-1}{R_0}\right)t}}
```
 Over time, ${tex`I(t)`} approaches ${tex`1-R_0^{-1}>0`} if ${tex`R_0 > 1`} or vanishes if ${tex`R_0 < 1`}. In the former case, ${tex`I(t)`} describes a sigmoid over time, with an initial exponential growth followed by an exponential saturation (see Sec. 2.2.2.2 <a href="http://hdl.handle.net/10803/691374" target="_blank">here</a> for proof); in the latter, ${tex`I(t)`} just decays exponentially.

 ```js
function integrate_Euler_SIS(steps, N, β, α, h) {
    // Initialize
    let I = 1
    
    // Pre-allocated arrays (faster)
    let It = new Array(steps);
    
    // Observe
    for (let step = 0; step < steps; step++) {
      It[step] = I;

      // Update
      let delta_I = (β*N - α)*I - β*I*I  
      I += h*delta_I

    }
    return [It];
}
```

```js
let beta = view(Inputs.range([0.0000005, 0.00005], {label: "beta", step: 0.0000005, value:  0.000025}))
let alpha = view(Inputs.range([0.0, 0.1], {label: "alpha", step: 0.001, value:  0.02}))
```

```js
let [I] = integrate_Euler_SIS(10000, 10000, beta, alpha, 0.01);
```
```js
Plot.plot({
  x: {label: "time"},
  y: {label: "fraction infected", grid:true},
  marks: [
    Plot.frame(),
    Plot.lineY(I, {stroke: "black"}),
    ]
  })
```
 
...

What if the system is exactly at the critical point ${tex`R_0 = 1`} (i.e., ${tex`\beta N = \alpha`})? We cannot rely on the solution above, for we implicitly aasumed ${tex`\beta N \neq \alpha`} when solving Equation (3). Taking Equation (2) and setting ${tex`\beta N = \alpha`}, we still get a Bernoulli equation,
```tex
\frac{dI}{dt} = -\beta I^2
```
Proceeding as before, one obtains the solution
```tex
I(t)= \frac{I(0)}{1+I(0)\beta t} = \frac{I(0)}{1+I(0)\frac{\alpha}{N} t}
\tag{4}
```
Therefore, the epidemic dies out also for ${tex`R_0 = 1`}, yet not exponentially, but hyperbolically (${tex`\sim 1/t`}) – at a much lower pace. This phenomenon of a (qualitatively!) longer relaxation time towards the equilibrium state is an example of _critical slowing down_. In particular, we see from Equation (4) that the time needed for the system to relax diverges linearly with the system's size – doubling ${tex`N`} requires doubling ${tex`t`} to reach the same value of ${tex`I`}.

### Transversality of simple models

Can you think of other cases than infectious diseases where the dynamics is "isomorphic" to the SI(S) model? A couple of them come straight to my mind: a word or a behavior diffusing in a society, or a species growing in an environment. Wait...what?! How phenomena such different among them can be represented by the same model? Well, it turns out, they are not that different. Looking closer, they are all examples of population growth. The population of people using a word or adopting a behavior, or the population of a species. Words and behaviors "reproduce" themselves by being copied from mind to mind, through learning and imitation; species reproduce in the usual biological sense. This kind of transversality is typical of simple models: Stripped of finer details, many systems appear formally equivalent. You often want sophisticated models to make quantitatively accurate predictions, but simple, idealized models allow you to appreciate general patterns, build intuition and understanding, and transfer knowledge between fields.

After all these words, it's time to see a concrete example of such transversality. Consider a species in an environment with limited resources. Let ${tex`P(t)`} be the abundance of the species at time ${tex`t`} and ${tex`\rho`} be the rate at which each individual reproduces. With no restriction on resource availability, the population would follow a never-ending exponential growth ${tex`P(t) = P(0) e^{\rho t}`} as the solution of the equation ${tex`dP(t)/dt= \rho P(t)`}. Notice that, the same equation describes the more realistic situation where individuals are not ethernal beings and die at some rate ${tex`\delta`}. Just redefine ${tex`\rho`} via the mapping ${tex`(\rho - \delta) \rightarrow \rho`} and you get the same equation above, with the difference that ${tex`\rho`} can now be negative too and so lead to an exponential extinction. This is _Malthusian growth model_. Another big step towards reality is to account for the fact that resources are never unlimited, and therefore individuals must compete for them. How do we encode such competition in the equation? A competition event needs at least two individuals to take place and causes the suppression of the loser (assuming there are always a winner and a loser), which either die or is unable to reproduce. The term accounting for competition should thus be negative and proportional to ${tex`P^2`}. We get to an equation of the form
```tex
\frac{dP}{dt} = \rho P - \beta P^2 = \rho P \left(1 - \frac{\beta}{\rho}P\right)
\tag{5}
```   
with ${tex`\beta > 0`}. This is the _Verhulst's growth model_. The quantity ${tex`\rho/\beta`} is called carrying capacity and you can easily check that it is the value the abundance ${tex`P`} eventually converges to when ${tex`\rho > 0`}. Putting a limit on the resources available, prevents the population to grow indefinitely.

Now, look again at Equation (5). Any bell ringing in your brain? If not, go back by a few paragraphs. Can you spot a similar equation? Substitute ${tex`\rho`} with ${tex`\beta N - \alpha`} and Equation (5) is now identical to Equation (2). The reason is that, by parameter rescaling, both these equations can be expressed in the following form
```tex
\frac{dx}{dt} = x(1-x)
\tag{6}
```
known as _logistic equation_. Remember the name, because its discrete-time version we are going to see next week will probably surprise you!

You may ask at this point: what is the limited resource in the SIS model when used to represent contagions – spread of pathogens, words, behaviors? Well, susceptible individuals. These are finite in number and infected individuals "compete" to infect them – the more the people I infect, the less the people available for you to infect.

### Reading between the (math) lines

The limited resources we made reference to do not show up in the equations. We just mentioned them to justify the presence of that quadratic term. They are hidden there and it is a good exercise to make them appear explicitly. To make the Verhulst model a bit more general, suppose we now have two species of abundances ${tex`A`} and ${tex`B`}, competing for the same, finite resource of abundance ${tex`R`}. Calling ${tex`\alpha`} and ${tex`\beta`} the rates at which ${tex`A`} and ${tex`B`} individuals respectively consume the resource, and assuming for now a closed system, we get the following system of equations
```tex
\begin{cases}
\begin{align}
\frac{dA}{dt} &= \alpha A R     &\tag{7a} \\
\frac{dB}{dt} &= \beta B R     &\tag{7b} \\
\frac{dR}{dt} &= -\alpha A R - \beta B R     &\tag{7c}
\end{align}
\end{cases}
```

${mermaid`graph LR
      R -- α A R ---> A;
      R -- β B R ---> B;
`}

If we think of the three abundances in terms of biomass (measured for instance as the mass of the present <a href="https://en.wikipedia.org/wiki/Total_organic_carbon" target="_blank">total organic carbon</a>), we can directly compare them. Since the system is closed, the total biomass ${tex`M = A + B + R`} is constant over time (fast check: summing Equations (7) we get zero on the right hand side).

It seems like the equations for the two species do not talk to each other, as also the diagram seems to suggest. Where is the competition we stated at the beginning then? Let's not rush. Let us express ${tex`R`} in terms of ${tex`A`} and ${tex`B`} and define ${tex`\rho_A = \alpha M`} and ${tex`\rho_B = \beta M`}. We get to the reduced system
```tex
\begin{cases}
\begin{align}
\frac{dA}{dt} &= \rho_A A - \alpha A^2 - \alpha AB    &\tag{8a} \\
\frac{dB}{dt} &= \rho_B B - \beta B^2 - \beta AB     &\tag{8b} \\
\end{align}
\end{cases}
```

Now read between the lines – Equations (8) have the same form of Equation (5), except for the extra term proportional to ${tex`A B`}. It is the latter that accounts for the competition between the two species! Equations (8) are a specific instance of the so-called _competitive Lotka-Volterra equations_. We could have found them heuristically, as we did for Equation (5) (which, by the way, is the one-species version), instead we derived them from a more detailed model. As an exercise, make the system open by considering additional processes such as death or intake of new resources (or any other you can think of), and try to reduce the resulting system of equations. Do you still get terms of the form of those in Equations (8)? As a second exercise, find the condition under which Equations (8) reduce to two independent Malthusian equations.

Let us close this section by observing what does it mean in terms of closeness/openness of the system to reduce the number of equations. We already used the constraint ${tex`M = A + B + R`} to get rid of one equation (Equation (7c)). As a consequence, summing Equations (8a) and (8b) we no longer get zero on the right hand side, meaning the reduced system is not closed. We can see this graphically drawing the diagram corresponding to Equations (8).
${mermaid`graph TD
      A -- ρ<sub>A</sub> A ---> A;
      A -- α A (A + B)---> outA;
      B -- ρ<sub>B</sub> B ---> B;
      B -- β B (A + B) ---> outB;
      style outA fill:#fff,stroke:#fff,color:#fff
      style outB fill:#fff,stroke:#fff,color:#fff
`}

The flow coming out from the ${tex`A`} and ${tex`B`} boxes, ${tex`(\alpha A + \beta B) (A + B)`}, is indeed the positive contribution to ${tex`dR/dt`} – lost biomass due to competition fed back into the environment as new available resource –, while the rate in the loops, ${tex`\rho_A A + \rho_B B`}, give the negative contribution to it – species consume resources to reproduce.


