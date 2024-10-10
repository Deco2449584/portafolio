import portfolio from "../../assets/portafolio.png";
const projects = [
  {
    id: "1",
    title: "project1_title",
    description: "project1_description",
    image: "https://futurehousestore.co.uk/img/cms/blog/ha-main.png",
    liveLink: "https://danielcaro.online",
    techStack: ["Node-red", "HomeAssitant", "MQTT", "Tasmota"],
    category: "domotica",
  },
  {
    id: "2",
    title: "project2_title",
    description: "project2_description",
    image:
      "https://community-assets.home-assistant.io/original/4X/a/e/e/aee44dc514ff0cb230b158e95afe06ff92da1ba5.jpeg",
    liveLink: "https://danielcaro.online",
    techStack: ["Panel Solar", "Grafana", "Node-red", "HomeAssitant"],
    category: "domotica",
  },
  {
    id: "3",
    title: "project3_title",
    description: "project3_description",
    image: portfolio,
    githubLink: "https://github.com/yourusername/portfolio",
    liveLink: "https://danielcaro.online",
    techStack: ["React", "javascript", "StyleComponets"],
    category: "software",
  },
  {
    id: "4",
    title: "project4_title",
    description: "project4_description",
    image:
      "https://cdn.shopify.com/s/files/1/0329/9865/3996/t/5/assets/what_is_the_best_task_management_app-vRauoz.True?v=1707867381",
    githubLink: "https://github.com/yourusername/task-manager",
    liveLink: "https://danielcaro.online",
    techStack: ["React", "Express", "MongoDB"],
    category: "software",
  },
];

export default projects;
