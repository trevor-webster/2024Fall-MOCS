# Getting started

Welcome to Modeling Complex Systems (MOCS) Fall 2024! This is the support website where we'll share most of the class content, excluding homework assignments. Homeworks will be available on [Brightspace](https://brightspace.uvm.edu/d2l/login).

MOCS is designed as a hybrid, graduate level introduction to computational and mathematical modeling of complex systems. This is a core course for students at [Vermont Complex Systems](https://vermontcomplexsystems.org/), but everybody are welcome. We use a breadth-first presentation of varied topics and methods, with hands-on experiences and mini-research problems with an emphasis on the relations and trade-offs between the different approaches. Undergraduates are held to the same expectations as graduate students. See [syllabus](./syllabus) for more details.

How is this website organized?

- For each module
    - We will share some introductory videos and readings on the module's getting started page.
    - We will share fun, interactive content related to the module.
- You can find additional references on complex systems [here](./refs). Module-specific content is available on each module's main page.
- We will make jupyter notebooks available throughout the semester [here](./notebooks).
- You can find extra ressources for computer sciency stuff (Github, Python, Julia, etc) and advanced readings in [here](./extra-ressources). Prianka will be your guide for the computer sciency stuff.
- We have 

## Who are we?

<div class="gallery grid grid-cols-4" style="grid-auto-rows;">
    <a href="htttps://socks.w3.uvm.edu/socks/node/38?rnd=0.1937717982807522#giulioburgio" target="_blank">
        <picture>
            <source srcset="./assets/Giulio.webp" media="(prefers-color-scheme: dark)">
            <img src="./assets/Giulio.webp">
        </picture>
        <div class="small arrow">Giulio Burgio (co-lead instructor)</div>
    </a>
    <a href="https://jstonge.vercel.app/" target="_blank">
        <picture>
            <source srcset="./assets/jso.webp" media="(prefers-color-scheme: dark)">
            <img src="./assets/jso.webp">
        </picture>
        <div class="small arrow">Jonathan St-Onge (co-lead instructor)</div>
    </a>
    <a href="https://www.linkedin.com/in/prianka-bhattacharjee-bb7a69109/" target="_blank">
        <picture>
            <source srcset="./assets/prianka.webp" media="(prefers-color-scheme: dark)">
            <img src="./assets/prianka.webp">
        </picture>
        <div class="small arrow">Prianka Bhattacharjee (teaching assistant)</div>
    </a>
    <a href="http://laurenthebertdufresne.github.io/" target="_blank">
        <picture>
            <source srcset="./assets/lhd.webp" media="(prefers-color-scheme: dark)">
            <img style="opacity: 0.3;" src="./assets/lhd.webp">
        </picture>
        <div style="opacity: 0.3;" class="small arrow">Laurent Hébert-Dufresne (Instructor on sabbatical)</div>
    </a>
</div>

## What is complexity

Laurent Hébert-Dufresne gave the following answer to a journalist:

<figure class="quote">
  <blockquote>
    Let’s talk about complex systems instead. They’re easier to define than complexity! Complex systems are opposed not to simple systems, but to <strong>separable systems</strong>. And often different parts of these systems have different natures that we study with different disciplines. They may be sociotechnical systems that involve both algorithms, technology and engineering, and humans and social biases and so forth. And so, by their nature, we need to study them with tools from different disciplines and with dialogues across different expertise.
    <br><br>
    Now, I don't think that “complexity science” is a science. I think we use the phrase a lot and it depends on how you want to define a science. But complexity science doesn't have a shared set of questions, systems of interest, or tools. It's all over the place.
    <br><br>
    So, I use “complexity” almost as virtue signaling—to group the subfield of scientists interested in studying these complex systems and open to doing it with tools and perspective from different disciplines. Identifying with “complexity” is a signal that you're open to dialogue and weird ideas more so than a defined science. So that's why it's not npj complexity science, it's npj complexity. It's more of a perspective or a mentality and less of a science. That's how I see it. And I think that's the identity of the journal. No particular systems of interest, but more about a perspective with which we do many kinds of science.
  </blockquote>
  <figcaption>
    &mdash; LHD's answer, <cite><a href="https://www.uvm.edu/news/story/honeybees-hate-speech">Honeybees to Hate Speech</a></cite>  </figcaption>
</figure>

In this class, we will seek to understand his definition. But at the end, you should have your own answer. You should be able to say if you agree or disagree with LHD's answer. 

Here is Laurent introducing MOCS in his own words as well:

<iframe src="https://streaming.uvm.edu/embed/49955/" width="560" height="315" frameborder="0" allowfullscreen></iframe>

We will be sharing more clips like these, as Laurent does an excellent job of explaining complex systems concepts. Our role as instructors will be to help you deepen your understanding of the insights from these clips and to offer additional perspectives of our own.

## Textbook(s)

For the class, we will use Hiroki Sayama's [Introduction to the Modeling and Analysis of Complex Systems](https://math.libretexts.org/Bookshelves/Scientific_Computing_Simulations_and_Modeling/Introduction_to_the_Modeling_and_Analysis_of_Complex_Systems_(Sayama)). It is free and online. It has python code. 

But I also think that the following two books could have done as much a good job:
    
- [A First Course in Network Science (Menczer 2020)](https://www.cambridge.org/highereducation/books/first-course-in-network-science/EE22722F27519D8BB1443C7225C57BAF#overview)
- [ Modeling Social Behavior: Mathematical and Agent-Based Models of Social Dynamics and Cultural Evolution (Smaldino 2023)](https://press.princeton.edu/books/paperback/9780691224145/modeling-social-behavior?srsltid=AfmBOorePduR0U08FlRogK-f7wGabiko62RAu8iX6knapk_xWLGUw9jE)

They cover some of the same materials. They are geared towards the social sciences, with plenty of examples of disinformation and cultural evolution. 

We will also read in-depth articles. Each week, there will be a <big>`This week reading`</big> box at the start of the page. Articles denoted with stars(*) are mandatory. 

## How-to follow the class content

You must look through each week content before coming to class on Tuesdays. The content includes short clips and readings. They will be the basis for in-class discussions and small quizzes that you must take before the Thursday of the same week. 


<style>

    .quote {
        margin: 0;
        background: #eee;
        padding: 1em;
        border-radius: 1em;
    }
    
    .quote figcaption,
    .quote blockquote {
        margin: 1em;
    }

    /* Gallery */

    .gallery {
        max-width: calc(1200px + 2rem);
    }

    .gallery a {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }

    .gallery img {
        width: 100%; /* Ensures the image takes up the full width of the container */
        height: 200px; /* Sets a fixed height for all images */
        object-fit: cover; /* Maintains aspect ratio while ensuring the image covers the entire area */
        border-radius: 8px;
        box-shadow: 0 0 0 0.75px rgba(128, 128, 128, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.2);
        aspect-ratio: 2500 / 1900; /* Can be removed if you're using fixed dimensions */
    }

    @media (prefers-color-scheme: dark) {
        .gallery img {
            box-shadow: 0 0 0 0.75px rgba(128, 128, 128, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.4);
            }
        }
        .gallery a:not(:hover, :focus) {
            color: var(--theme-foreground-muted);
        }

        .gallery a:hover img,
        .gallery a:focus img {
            box-shadow: 0 0 0 0.75px var(--theme-foreground-focus), 0 6px 12px 0 rgba(0, 0, 0, 0.2);
        }

        .gallery figcaption {
            font-size: 12px;
            color: inherit;
        }

        .arrow {
            font-weight: 500;
        }

        .arrow::after {
            content: "→";
            display: inline-block;
            margin-left: 0.25rem;
        }

</style>