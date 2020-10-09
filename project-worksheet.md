# Project Overview

## Project Links

- Github <a>https://github.com/estebang625/Project-2 </a>
- Netlify  <a>https://marvel-proj-70d4ad.netlify.app/</a>

## Project Description

My project is going to be a type of Spider-Man encyclopedia where it gives a summary of each Spider-Man comic book that found within the list of Spider-Man comic book covers.

## API

```
0: {id: 21171, digitalId: 0, title: "Amazing Spider-Man (1999) #558 (Turner Variant)", issueNumber: 558, variantDescription: "Turner Variant", …}
```

## Wireframes

- Mobile <Link><https://xd.adobe.com/view/62bb196b-76bc-40d8-81cd-8855f4bf6b64-37e8/></Link>

- Tablet <Link><https://xd.adobe.com/view/bc43134b-efe7-42fe-84c7-2df9cc8f8e77-e910/></Link>

- Window <link><https://xd.adobe.com/view/e7b8bcd2-b418-4bb0-a581-a94e0a1c38af-b2eb/></Link>

- React Architecture <Link><https://xd.adobe.com/view/833bf3f2-3a16-48a2-9dd2-96d2b4c4ee9a-d668/></Link>

### MVP/PostMVP - 5min

MVP

- Adding the nav for the home and comic book list pages
- Making API render the specific data
- Interactivity with nav
- Having the onClick route to a different page when clicking on the specific comic book page to show description
- Functionality with API 
- SCSS (SASS) for the App



Post MVP

- Adding animations for the clicks 

Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component | Description |
| --- | :---: |  
| Home | Home will contain the greetings when entering the webpage along with the nav.  |
| App | App will be pulling and rendering data from every child component and will be containing the route pathing |
| Nav  | This will give options to go to home and comic list section of web page |
| main | Will be having the disposable data needed for the whole project that will contain the list of comics of spider man  |
| comic summary | will be having the specific selected data for the comic book selected |

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Home | H | .5hr| 1hr | 1hr |
| Working with API | H | 4hrs| 3hrs | >6hrs |
| Rendering API | H | 2hrs| 2.5hrs | 4hrs |
| Working on Comic Data rendering | H | 2hr| 1hr | 4hrs |
| SCSS | L | 2hrs| 1hr | 2hrs |
| Total | H | 10.5hrs| 8hrs | 17hrs |

## Additional Libraries

- React
- SCSS

## Problem ran into

- I ran into a problem where i could not replace the character ID numbering to be a typed in name for itself when using from/searchbar so instead i am going to be using the array of the given data of the specific character being spider man and will be making a spiderman comic book encyclopedia website! It will show an array of object being the comic books with their cover and when clicked on will send you over to the comic book description page of the specifc comic boo selected.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code.

```
    let comics = ''
    if (listOfComics[0]) {
        comics = listOfComics.map((comic, index) => {
            return(
                <div key={index}>
                    <Link to={`/comicsummary/${comic.id}`}> <h3>{comic.title}</h3> </Link>
                </div>
            )
        })
    }
```
