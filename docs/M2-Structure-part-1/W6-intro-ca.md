# Cellular Automata and Fractals

<div class="flex-container">
  <div class="left-div callback">
    <h3>💡 Previously on...</h3>  
    Last week we closed Module 1: Dynamics. Until now, we cared about the functional forms of the interactions in our model, studying the different behaviors they can lead to. At the same time, we assumed that any part of the system can interact with any other part. That is, there is no space in our model or, if you want, there is but it is a trivial one - everything is connected/close to everything. But real systems are embedded in space, and in many cases we cannot neglect this.
    <br>
    <p></p>
  </div>
  <div class="reading-box">
    <h3>📚 Week 6 readings</h3>
    <ul class="reading-list">
      <li><span>📖</span> <a href="https://math.libretexts.org/Bookshelves/Scientific_Computing_Simulations_and_Modeling/Introduction_to_the_Modeling_and_Analysis_of_Complex_Systems_(Sayama)/11%3A_Cellular_Automata_I__Modeling" target="_blank">Cellular Automata I - Modeling (Ch. 11 Sayama)</a><sup>*</sup></li>
      <li><span>📖</span> <a href="https://brightspace.uvm.edu/content/enforced/84713-202409-92381/csfiles/home_dir/courses/202209-0824C-Merged/Wolfram_CellularAutomata_1984.pdf" target="_blank">Cellular automata as models of complexity (Wolfram 1984)</a><sup>*</sup></li>
      <li><span>📖</span> <a href="https://brightspace.uvm.edu/content/enforced/84713-202409-92381/csfiles/home_dir/courses/202209-0824C-Merged/Mandelbrot_1967.pdf?ou=84713" target="_blank">How Long Is the Coast of Britain? (Mandelbrot 1967)</a><sup>*</sup></li> + <a href="https://brightspace.uvm.edu/content/enforced/84713-202409-92381/csfiles/home_dir/courses/202209-0824C-Merged/Mandelbrot_1967_Appendix.pdf?ou=84713" target="_blank">Appendix</a><sup>*</sup></li>
    </ul>
  </div>
</div>

This week we move to Module 2 and learn to incorporate structured interaction into our models of complex systems. Using a concise formulation of local spatial interactions called Cellular Automata (CA), operating in discrete time and space, we will be able to reproduce the same interesting behaviors observed in dynamical systems: phase transitions, attractors, and chaos. Incorporating structure allows a more effective representation of many systems of interest, including the production of beautiful patterns that you can find in nature!

We start with LHD introducing elementary CA, the simplest instance of this kind of system.

<iframe src="https://streaming.uvm.edu/embed/49973/" width="560" height="315" frameborder="0" allowfullscreen></iframe>

Setting all the rules for a CA to work is pretty boring. The fun part of CA is simulating them and enjoying the unexpected! We learn how to implement them in the next video.

<iframe src="https://streaming.uvm.edu/embed/49974/" width="560" height="315" frameborder="0" allowfullscreen></iframe>

Structures as those generated over time by, for instance, _rule 30_ or _rule 110_ of the elementary CA, are self-similar – they repeat the same at different scales. In the next video, LHD shows how such structures are not 2D nor 3D, but instead have a fractional dimension, they are _fractals_! One method to define and compute this dimension is the box-counting method, explained next. 

<iframe src="https://streaming.uvm.edu/embed/49976/" width="560" height="315" frameborder="0" allowfullscreen></iframe>

We close by introducing the most popular CA, Conway's _Game of Life_.

<iframe src="https://streaming.uvm.edu/embed/49977/" width="560" height="315" frameborder="0" allowfullscreen></iframe>

<div class="callout-box">
  <h3>Things to do by Thursday at noon</h3>
  <ul class="checklist">
    <li><input type="checkbox" id="task1"><label for="task1">Quiz 6</label></li>
  </ul>
</div>

---

## Bonus content

Lhd introducing binary numbers

<iframe src="https://streaming.uvm.edu/embed/49975/" width="560" height="315" frameborder="0" allowfullscreen></iframe>