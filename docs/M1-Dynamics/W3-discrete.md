# Discrete models
<div class="flex-container">
  <div class="left-div callback">
    <h3>💡 Previously on...</h3>  
    <p>We covered philosophy of (scientific) modeling and LHD's recipe for modeling. We distinguished between scale, analogical, idealized, and phenomenological models. Can you remember what is the difference between aristotelian and galilean idealized models? Why phenomenological models not understood as mecanistic models?</p>
    <br>
    <p>We then introduced compartment models by drawing diagrams. How do we distinguish the boxes from one another? What are the assumptions that go into building a models as boxes? What are we missing?</p>
  </div>
  <div class="right-div reading-box">
    <h3>📚 Week 3 readings</h3>
    <ul class="reading-list">
    <li><span>📖</span> <a href="https://math.libretexts.org/Bookshelves/Scientific_Computing_Simulations_and_Modeling/Introduction_to_the_Modeling_and_Analysis_of_Complex_Systems_(Sayama)/03%3A_Basics_of_Dynamical_Systems" target="_blank">Basics of Dynamical Systems (Ch. 3 Sayama)</a><sup>*</sup></li>
    <li><span>📖</span> <a href="https://math.libretexts.org/Bookshelves/Scientific_Computing_Simulations_and_Modeling/Introduction_to_the_Modeling_and_Analysis_of_Complex_Systems_(Sayama)/04%3A_DiscreteTime_Models_I__Modeling" target="_blank">Discrete-Time Models I - Modeling  (Ch. 4 Sayama)</a><sup>*</sup></li>
    <li><span>📖</span> <a href="https://scholarship.claremont.edu/cgi/viewcontent.cgi?article=2153&context=hmc_fac_pub" target="_blank">Mathematics for Human Flourishing (Francis Su)</a><sup>*</sup></li>
    </ul>
  </div>
</div>

This week, we convert last week's boxes into discrete dynamical equations that we can do maths and compute. We start with the SIR model, and show how we can make it more heterogenous by introducing, for instance, different degrees of susceptibility, distinct removal status (e.g., long lasting sickness, dead, recovered), or infection awareness (e.g., asymptomatic).

<iframe src="https://streaming.uvm.edu/embed/49961/" width="560" height="315" frameborder="0" allowfullscreen></iframe>

In this video, LHD walkthroughs the SIS model and introduces the mean-field approximation:

<iframe src="https://streaming.uvm.edu/embed/49962/" width="560" height="315" frameborder="0" allowfullscreen></iframe>

We are now ready to convert the mathematics into code: 

<iframe src="https://streaming.uvm.edu/embed/49963/" width="560" height="315" frameborder="0" allowfullscreen></iframe>

As an example, LHD imagines a cloning factory as idealized through the diagram below: 

${mermaid`graph LR
      cIN --a (N->N+1)---> CloneFactory;
      CloneFactory --c (N->2N)---> CloneFactory;
      CloneFactory --l (N->N-1)---> cOUT;
      style cIN fill:#fff,stroke:#fff,color:#fff
      style cOUT fill:#fff,stroke:#fff,color:#fff
`}

where ${tex`c`} is the rate at which people clone themselves, and ${tex`a`} and ${tex`l`} are the rates at which people arrive and leave the factory, respectively. Events within each of these three processes occur at a fixed rate, hence independently from each other. These are Poisson processes, perhaps the simplest type of random process.

<div class="def">
<h3>Poisson Processes</h3>
  Something happens at a given (fixed) rate, regardless of what happens beforehand.
</div>


Back to example above, every now and then (e.g., everyday if we assume ${tex`Δt = 1\textrm{day}`}) the factory (weirdly enough) thus ask you to follow this procedure:

```julia
# Julia code
for t=1:Δt:T
  if rand() < a*Δt
    N_t += 1         # 'arrivals' (people getting into the building)
  end
  for n=1:N_t 
    if rand() < l*Δt
      N_t -= 1     # 'departures'  (people leaving it)
    else
      if rand() < c*Δt
        N_t += 1       # 'cloning' (people cloning themselves)
      end
    end
  end
end
```

A couple of observations here. What if a transition rate, say ${tex`a`}, is too high so to make the associated transition probability ${tex`a\cdot Δt`} larger than 1? This occurs because the duration ${tex`Δt`} of the time step you are considering is too large. For instance, if there are, on average, three people entering the building in a day and ${tex`Δt`} stands for _one day_, then ${tex`a\cdot Δt = 3/\textrm{day} \cdot \textrm{day} = 3 > 1`}. To solve the problem, take for example ${tex`Δt = 1\textrm{hour}`}, so that now ${tex`a = (3/24)/\textrm{day}`} and ${tex`a\cdot Δt = (3/24)/\textrm{hour} \cdot \textrm{hour} = 1/8 < 1`}.

Also, order matters. We are testing departure first, assuming that people can replicate only if they have not decided to leave the building. One could think of alternative situations where, during the same time step (which, remember, being finite allows for multiple processes to take place within it), people first try to clone themselves and then consider to leave; or, where recently arrived people are not allow to replicate or leave immediately after arrival (which would mean moving the `arrivals' code block to the end). In all cases, two events involving the same individual can never be simultaneous (in the factory, e.g., you can't leave while arriving or cloning yourself while leaving). Time discreteness forces us to hardwire the order of the potential events.

In the clip below, LHD shows how both these issues – transition probabilities larger than one and time ordering of competing events – are solved by considering small enough (eventually infinitesimal) time steps. 

<iframe src="https://streaming.uvm.edu/embed/49964/" width="560" height="315" frameborder="0" allowfullscreen></iframe>

...

> Rate of a sum of poisson processes is the sum of rates!

__Property__: Given two competing Poisson processes, the probability of Poisson process of rate ${tex`\lambda_1`} occuring before Poisson process of rate ${tex`{\lambda_2}`} is

```tex
\frac{\lambda_1}{\lambda_1 + \lambda_2}
```

<div class="callout-box">
  <h3>Things to do by Thursday at noon</h3>
  <ul class="checklist">
    <li><input type="checkbox" id="task1"><label for="task1">Quiz 3</label></li>
  </ul>
</div>

---

Bonus: Taylor Series and L'Hospital rule

<iframe src="https://streaming.uvm.edu/embed/49965/" width="560" height="315" frameborder="0" allowfullscreen></iframe>

Obligatory reference to 3b1b on L'Hôpital's rule

<iframe width="560" height="315" src="https://www.youtube.com/embed/kfF40MiS7zA?si=DiOypuLPByUvv07D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

And Taylor Series

<iframe width="560" height="315" src="https://www.youtube.com/embed/3d6DsjIBzJ4?si=JmVHNmaA07YDjOxb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
