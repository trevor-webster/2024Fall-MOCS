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

Let us briefly rederive the equation for the SIS model in the well-mixing or mean-field approximation – it is a good exercise. We thus assume that each of the ${tex`N`} individuals interacts with ${tex`k`} random individuals per time unit (e.g., per hour). Each of the ${tex`k`} contacts of each of the ${tex`I`} infected individuals in the population has probability ${tex`S/N`} of being susceptible. New infections are thus produced at rate ${tex`\beta k I S/N`}, while infected individuals recover at rate ${tex`\alpha`}. Considering a closed population (hence ${tex`S=N-I`}), we thus get the following dynamic equation,
```tex
\frac{dI}{dt} = \beta k \frac{S}{N} I - \alpha I = (\beta k - \alpha)I - \frac{\beta k}{N} I^2
```
Rescaling ${tex`\beta`} via the mapping ${tex`\beta k/N \rightarrow \beta`}, we get the equivalent, but more coincise equation
```tex
\frac{dI}{dt} = (\beta N - \alpha)I - \beta I^2
```
Notice that an SI dynamics is obtained by setting ${tex`\alpha=0`} (no recovery). The equation above is a second-order ODE of the family of _Bernoulli differential equations_. This kind of ODEs can be solved exactly by transforming them into linear ODEs. Here is the trick. Define ${tex`y = I^{-1}`}, hence ${tex`I = y^{-1}`}, and substitute in the equation above. Notice ${tex`dI(t)/dt = dI/dy \cdot dy/dt = -y^{-2}\cdot dy/dt`}, from which,
```tex
-\frac{1}{y^2}\frac{dy}{dt} = \frac{1}{y}(\beta N - \alpha) - \frac{1}{y^2}\beta
```
Multuplying both sides by ${tex`-y^2`}, we get the sought linear equation,
```tex
\frac{dy}{dt} = -(\beta N - \alpha)y + \beta
```
We have already seen how to solve this (reminder: solve first the homogeneous equation with no constant term, then solve the full equation by letting the factor in front of the exponential you got to depend on time); we get the solution
```tex
y(t) = \frac{\beta N}{\beta N-\alpha} + \left(y(0) - \frac{\beta N}{\beta N-\alpha}\right) e^{-(\beta N-\alpha)t}
```
From ${tex`I = y^{-1}`}, multiplying numerator and denominator by ${tex`I(0)(\beta N -\alpha)/\beta N`}, we get the solution
```tex
I(t) = \frac{\beta N-\alpha}{\beta N} \frac{I(0)}{I(0)+(\frac{\beta N-\alpha}{\beta N}-I(0))e^{-(\beta N-\alpha)t}}
```
First, notice that setting ${tex`\alpha = 0`} provides the solution for the SI model. Second, considered ${tex`\alpha \neq 0`}, we can recast the expression above in terms of the basic reproduction number, ${tex`R_0 = \beta N/\alpha`}. Recall that ${tex`(\beta N-\alpha)/\beta N = R_0/(R_0-1)`} is the equilibrium point the systems reaches when ${tex`\beta N>\alpha`} (i.e., ${tex`R_0 > 1`}). We can thus express the solution as
```tex
I(t) = \frac{R_0-1}{R_0} \frac{I(0)}{I(0)+\left(\frac{R_0-1}{R_0}-I(0)\right) e^{-\beta\left(\frac{R_0-1}{R_0}\right)t}}
```
 Over time, ${tex`I(t)`} approaches ${tex`1-R_0^{-1}>0`} if ${tex`R_0 > 1`} or vanishes if ${tex`R_0 < 1`}. In the former case, ${tex`I(t)`} describes a sigmoid over time, with an initial exponential growth followed by an exponential saturation (see Sec. 2.2.2.2 <a href="http://hdl.handle.net/10803/691374" target="_blank">here</a> for proof); in the latter, ${tex`I(t)`} just decays exponentially.

 ```js echo
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
let beta = view(Inputs.range([0.0000005, 0.00005], {label: "beta", step: 0.0000005, value:  0.00003}))
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

What if the system is exactly at the critical point ${tex`R_0 = 1`} (i.e., ${tex`\beta N = \alpha`})? We cannot rely on the solution above, for it required ${tex`\beta N \neq \alpha`}. Taking the original ODE and setting ${tex`\beta N = \alpha`}, we still get a Bernoulli equation,
```tex
\frac{dI}{dt} = -\beta I^2
```
Proceeding as before, one obtains the solution
```tex
I(t)= \frac{I(0)}{1+I(0)\beta t} = \frac{I(0)}{1+I(0)\frac{\alpha}{N} t}
```
Therefore, the epidemic dies out also for ${tex`R_0 = 1`}, yet not exponentially, but hyperbolically (${tex`1/t`}) – at a much lower pace. This phenomenon of a (qualitatively!) longer relaxation time towards the equilibrium state is an example of _critical slowing down_. In particular, we see from the expression above that the time needed for the system to relax diverges linearly with the system's size – doubling ${tex`N`} requires doubling ${tex`t`} to reach the same value of ${tex`I`}.

...

Can you think of other situations outside of epidemiology where the dynamics is "isomorphic" to the SI(S) model? A couple of them come to my mind: a word or a behavior diffusing in a social system, or a species growing in an environment. 
