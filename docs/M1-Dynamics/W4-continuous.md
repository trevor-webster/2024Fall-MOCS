# Continuous models
<div class="flex-container">
  <div class="left-div callback">
    <h3>💡 Previously on...</h3>  
    <p>Last week we saw how to formalize (in the simplest possible way) our modeling choices in the form of difference equations. Thinking of a system's evolution in discrete time is generally easier, which helps to formalize it. Also, the finite resolution with which we observe or measure a system in reality makes data discrete and thus more promptly interpreted via a discrete-time formulation. However, a finite time step allows multiple processes to occur simultaneously, and we showed how this can lead to incompatible events which, to be avoided, require us to force a certain temporal ordering.</p>
    <br>
    <p>We showed through an example how, thanks to infinitesimal time steps allowing for only one event at a time, continuous-time models solve that problem by construction. In particular, we introduced Poisson processes, a basic type of stochastic process, essential to model systems in virtually any field.</p>
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

In the next clip, LHD shows the transition from discrete to continuous time using the SIS model.

<iframe src="https://streaming.uvm.edu/embed/49966/" width="560" height="315" frameborder="0" allowfullscreen></iframe>

<iframe src="https://streaming.uvm.edu/embed/49967/" width="560" height="315" frameborder="0" allowfullscreen></iframe>

<iframe src="https://streaming.uvm.edu/embed/49968/" width="560" height="315" frameborder="0" allowfullscreen></iframe>

<iframe src="https://streaming.uvm.edu/embed/49969/" width="560" height="315" frameborder="0" allowfullscreen></iframe>


<div class="callout-box">
  <h3>Things to do by Thursday at noon</h3>
  <ul class="checklist">
    <li><input type="checkbox" id="task1"><label for="task1">Quiz 4</label></li>
  </ul>
</div>
