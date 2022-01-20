# Node Pet Admin

## A simple interactive js script with inquirer 

How the script works.

The script prompts the user to choose an option from an arrow menu.

```
$ node index.js
Hi, welcome to Node Pets Admin
Neon is the name of your dog. Right now his hunger level is 8 and his happiness level is 10.
? What would you like to do right now? (Use arrow keys)
> Feed him a treat
  Play with him in the garden
  Walk him to the park
  Nothing today, just chill
```

After the user choice, the selected action is a promise that will be resolved. 4 seconds gone by, a message signals that the promise has been resolved.  

```
$ node index.js
Hi, welcome to Node Pets Admin
Neon is the name of your dog. Right now his hunger level is 8 and his happiness level is 10.
? What would you like to do right now? Feed him a treat

As wished! His hunger level is now 3 and his happiness level is 11.

```
