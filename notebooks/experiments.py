import numpy as np
import matplotlib.pyplot as plt

#parameters
N = 10000 #population
M0 = 1 #patient zero
I0 = N - M0 #informed accounts
It0 = 1000 #no informed tweets
Mt0 = 1 #no misinformed tweets
n = 50 #tweets read per day
alpha = 0.01 #I to M conversion probability
beta = 0.02 #M to I conversion
rhoI = 5 #informed tweets written
rhoM = 5 #misinformed tweets written
omegaI = 0.37 #correction probability
omegaM = 0.005 #distortion probability
rI = 0.05 #retweet of informed
rM = 0.07 #retweet of misinformed
delta = 0.5 #probability of death


res = [] #list of results
I = I0; M = M0; Mt = Mt0; It = It0; #set initial conditions
h = 0.01; #timestep
T = np.arange(1,500/h);
for t in T:
  delta_I = M*n*(It/(Mt+It))*alpha #expected number of new corrections
  delta_M = I*n*(Mt/(Mt+It))*beta #expected number of new distorsions
  I += (delta_I - delta_M)*h #I(t+1)
  M += (delta_M - delta_I)*h #M(t+1)
  delta_It = I*rhoI + I*n*(Mt/(Mt+It))*omegaI + I*n*(It/(It+Mt))*rI - It*delta
  delta_Mt = M*rhoM + M*n*(It/(Mt+It))*omegaM + M*n*(Mt/(It+Mt))*rM - Mt*delta
  It += delta_It*h #It(t+1)
  Mt += delta_Mt*h #Mt(t+1)
  res.append((I,M,It,Mt))

Id,Md,Itd,Mtd = map(np.array, zip(*res))

#plot results
fig,ax = plt.subplots()
ax.plot(Id/N, 'b', label='Informed')
ax.plot(Md/N, 'r', label='Misinformed')
ax.plot(Itd/(Itd+Mtd), 'k', label='Informed tweets')
ax.plot(Mtd/(Itd+Mtd), 'g', label='Misinformed tweets')
ax.legend();


