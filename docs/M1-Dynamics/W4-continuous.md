# Continuous models
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

SIS and SI dynamics are pretty special nonlinear models, for they are simple enough to be solved exactly (specifically, we can find a closed expression for I(t) valid at all times; we will see how in class). In most cases – and "most" is an euphemism here – we are not able to do it, and our only possibility to watch the modeled system evolving is integrating the equations numerically. In the next clip, LHD introduces two basic methods of numerical integration (Euler's and Heun's methods). In class, we will see how to implement such methods in Python.

<iframe src="https://streaming.uvm.edu/embed/49968/" width="560" height="315" frameborder="0" allowfullscreen></iframe>

Whether we want to explore the behavior of a stochastic system or test how well our model does in predicting that behavior, we need a way to simulate the dynamics. While in discrete time we know when any of the next events may occur – we only have to test whether or not it does –, in continuous time we have a continuous distribution of times at which the next event could take place. (This distribution exists also in discrete time, but it has a trivial form: a single peak at ${tex`t = Δt`}.) In the clip below, LHD shows how to sample such distribution. 

<iframe src="https://streaming.uvm.edu/embed/49969/" width="560" height="315" frameborder="0" allowfullscreen></iframe>


<div class="callout-box">
  <h3>Things to do by Thursday at noon</h3>
  <ul class="checklist">
    <li><input type="checkbox" id="task1"><label for="task1">Quiz 4</label></li>
  </ul>
</div>
