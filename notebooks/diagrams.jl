using Kroki

exp_growth = mermaid"""
graph 
  P --rP---> P
"""

write("notebooks/diagrams/exp-growth.png", render(exp_growth, "png"))

logistic_growth = mermaid"""
graph LR
  S --kS---> I
"""

write("notebooks/diagrams/logistic-growth.png", render(logistic_growth, "png"))

birth_death = mermaid"""
graph LR
in --m---> N
N --bN---> N
N --dN---> out
style in opacity:0.1,stroke-width:0px,color:#fff, stroke:#fff
style out opacity:0.1,stroke-width:0px,color:#fff, stroke:#fff;
"""

birth_death_png = render(birth_death, "png")

write("notebooks/diagrams/birth-death.png", birth_death_png)

sir = mermaid"""
graph LR
S --βI---> I
I --α---> R
"""

write("notebooks/diagrams/sir.png", render(sir, "png"))

lotka_volterra_1  = mermaid"""
graph LR
H --βL---> Hout
L --γ---> Lout
H --α---> H
L --δH---> H
style Hout opacity:0.1,stroke-width:0px,color:#fff, stroke:#fff;
style Lout opacity:0.1,stroke-width:0px,color:#fff, stroke:#fff;
"""

write("notebooks/diagrams/lotka-volterra-1.png", render(lotka_volterra_1, "png"))

lotka_volterra_2  = mermaid"""
graph
H --βL---> Hout
L --γ---> Lout
H --α---> H
L --δH---> L
style Hout opacity:0.1,stroke-width:0px,color:#fff, stroke:#fff;
style Lout opacity:0.1,stroke-width:0px,color:#fff, stroke:#fff;
"""

write("notebooks/diagrams/lotka-volterra-2.png", render(lotka_volterra_2, "png"))

lotka_volterra_3  = mermaid"""
graph
H --βLH---> Hout
L --γL---> Lout
H --αH---> H
L --δHL---> L
style Hout opacity:0.1,stroke-width:0px,color:#fff, stroke:#fff;
style Lout opacity:0.1,stroke-width:0px,color:#fff, stroke:#fff;
"""

write("notebooks/diagrams/lotka-volterra-3.png", render(lotka_volterra_3, "png"))

romeo_juliet = mermaid"""
graph LR
  J --β---> R
  R --μ---> R
  R --α---> J
"""

write("notebooks/diagrams/romeo-juliet.png", render(romeo_juliet, "png"))

