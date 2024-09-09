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

This week, we convert last week's boxes into discrete dynamical equations that we can do maths and compute. We start by introducing the SIR model, and show how we can make it more heterogenous, e.g. different types of susceptibility, or recovered status (e.g. long lasting sickness, dead, recovered), do people are aware that they are contagious (asymptomatic), age groups, etc.

<iframe src="https://streaming.uvm.edu/embed/49961/" width="560" height="315" frameborder="0" allowfullscreen></iframe>

In this video, Lhd walkthrough the SIS model and introduces the mean-field approximation:

<iframe src="https://streaming.uvm.edu/embed/49962/" width="560" height="315" frameborder="0" allowfullscreen></iframe>

We are now ready to convert the mathematics into code: 

<iframe src="https://streaming.uvm.edu/embed/49963/" width="560" height="315" frameborder="0" allowfullscreen></iframe>

In the process, Lhd introduces the idea of cloning factory and poisson processes: 

${mermaid`graph LR
      cIN --a---> CloneFactory;
      CloneFactory --c(N->2N)---> CloneFactory;
      CloneFactory --l---> cOUT;
      style cIN fill:#fff,stroke:#fff,color:#fff
      style cOUT fill:#fff,stroke:#fff,color:#fff
`}

where the rate ${tex`c`} is the rate at which people clone themselves. Everyday, this factory ask you (weirdly enough) to follow this procedure:

```julia
for t=1Δt:T
  if rand() < a⋅Δt
    N_t += 1         # 'arrivals'
  end
  for n=1:N_t 
    if rand() < lΔt
      N_t -= N_t     # 'departures'
    end
    if rand() < cΔt
      N_t += 1       # 'cloning'
    end
  end
end
```

What if ${tex`a\cdot Δt > 1`} ? Also, order matters. We are testing departure first. These people shouldn't be allowed to clone themselves.

```julia
[...]
    if rand() < lΔt
      N_t -= N_t  
    else  # <---- if you didn't leave, you get to clone yourself...
      if rand() < cΔt
        N_t += 1
    end
  end
end
```
There are more issues, that can be addressed by poisson processes 

<div class="def">
<h3>Poisson Processes</h3>
  Something happens at a given (fixed) rate, regardless of what happen beforehand.
</div>

<iframe src="https://streaming.uvm.edu/embed/49964/" width="560" height="315" frameborder="0" allowfullscreen></iframe>

Poisson processes can help fix two related problems, both happening when rates are high; (i) probability in any given step of something happening is smaller than one and (ii) when events happen at the same time (recovering and getting infected at the same time...).

The key idea from that video is that of renormalizing rates to make sure we handle correctly competing poisson processes. Say people can clone themselves every day:

```tex
\ell \Delta t \quad \text{(leaving first step)}\\ 
(1-\ell \Delta t)\ell \Delta t \quad \text{(leaving second step)}
```

We renormalize by ${tex`\Delta \tilde{t} = \Delta t / 2`}, or cutting the day in half.

```tex
\Delta t = \ell \frac{\Delta t}{2} + (1-\ell \frac{\Delta t}{2})\ell \frac{\Delta t}{2} = \ell \Delta t - \Big(\frac{\ell \Delta T}{2}\Big )^2 \quad \text{(leaving first step)} 
```

Now, for the chance of leaving on the second step

```tex
\begin{equation*}
  \begin{split}
    \Delta t &= \Big(1 - \ell \frac{\Delta t}{2} \Big)^2 \cdot \ell \frac{\Delta t}{2} +
                  \Big(1 - \ell \frac{\Delta t}{2} \Big)^3 \cdot \ell \frac{\Delta t}{2} \\ 
            &= \ell \frac{\Delta t}{2} + 
                \ell \frac{\Delta t}{2}\quad -
                \Big(\ell \frac{\Delta t}{2} \Big)^2 -
                \Big(\ell \frac{\Delta t}{2} \Big)^2 + O(\ell \Delta t^3)
  \end{split}
\end{equation*}
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

