

export default function Projects() {
    const projects = [
        {
            name: 'Ging Maps',
            image_src: '/assets/img/ece444-maps.jpg',
            description: 'A geological mapping platform for cities like Toronto, Tokyo, and London.',
            date: '07/01/2021',
            detailed_list: [
                'Used Dijkstra’s Algorithm + A* to find shortest path.',
                'Used a multi-start smart-greedy approach for traveling salesman problem.',
                'Optimized search using multithreading and 2-opt.',
                'Designed UI using the ezgl library to visualize POIs and roads, highlighting intersections.',
                'Implemented search feature while taking into consideration different zoom levels.',
            ],
            tools_used: 'EZGL Library, C++',
        },
        {
            name: 'Product O',
            date: '10/31/2022',
            image_src: '/assets/img/ece444-productO.png',
            description: 'Image and Audio to text transcribing tool.',
            detailed_list: [
                'Used Python for backend logic.',
                'Google Cloud API for speech-to-text and image processing, and Cloud Storage for file handling.',
            ],
            tools_used: 'Python, Google Vision API, Google Cloud API',
        },
    ];

    function addProjectCard(project) {
        const projectCard = document.createElement('div');
        projectCard.className = 'col s12 m6';
        let listItems = project.detailed_list.map(item => `<li>${item}</li>`).join('');

        projectCard.innerHTML = `
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img alt="${project.name}" src="${project.image_src}" style="height: 100%; width: 100%; object-fit: contain" class="activator" />
          </div>
          <div class="card-content">
            <span class="card-title activator teal-text hoverline">${project.name}<i
                class="mdi-navigation-more-vert right"></i></span>
            <p>
              ${project.description}
            </p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text"><small>Accomplishments</small><i
                    class="mdi-navigation-close right"></i></span>
            <ul>
              <li><b>Tools:</b> ${project.tools_used}</li>
              ${listItems}
            </ul>
          </div>
        </div>
        `;
        projectSection.appendChild(projectCard);
    }

    const projectSection =  document.getElementById('resume-projects');
    const loadMoreButton = document.getElementById('loadMore');

    const sortedProjects = projects.sort((a, b) => new Date(a.date) - new Date(b.date));
    addProjectCard(sortedProjects[0]);
    loadMoreButton.addEventListener('click', () => {
        loadMoreButton.remove();

        projects.slice(1).forEach((project) => {
            addProjectCard(project);
        });
    });
}