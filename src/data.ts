const data = {
  bf4090838181a4d9fab064dbebc779728: {
    title: "Platform Launch",
    id: "f4090838-181a-4d9f-ab06-4dbebc779728",
    tasks: [],
    statuses: ["Todo", "Doing", "Done"],
  },
  b6ef5a777a4c64288bffb59e0e7f44dfa: {
    title: "Marketting Plan",
    id: "6ef5a777-a4c6-4288-bffb-59e0e7f44dfa",
    tasks: [
      {
        title: "Build UI for on boarding flow",
        description: "Using the ",
        status: "Todo",
        subtasks: [
          { title: "Download the Figma File", done: false },
          { title: "Create a new UI Project", done: false },
          { title: "Adhere to the Figma file", done: false },
        ],
        taskId: "8c4cd9ab-65a8-487b-afb1-6ee99db9c842",
        due: "",
      },
      {
        title: "Review result of usability test",
        description:
          "The result of usability test are available on the pdf document named usability, check and see if there is need for changes",
        status: "Todo",
        subtasks: [
          { title: "Download the usability File", done: false },
          { title: "take note of all recommendation", done: false },
          { title: "check if the recommendation are followed", done: false },
        ],
        taskId: "c01fe995-3ce0-442a-8f3a-432c2de0a4bb",
        due: "",
      },
      {
        title: "Add Authentication endpoints",
        description:
          "The app requires authentication, create endpoint for all authentication related functions",
        status: "Doing",
        subtasks: [
          { title: "Create Register endpoint", done: true },
          { title: "Create Login endpoint", done: false },
        ],
        taskId: "4c34d4f9-5cb6-4825-93df-1c1117007ede",
        due: "",
      },
      {
        title: "Design onboarding flow",
        description:
          "For the mobile app, design the onboarding flow based on the instruction in the figma file",
        status: "Done",
        subtasks: [
          { title: "Follow the onboard section of the Figma File", done: true },
        ],
        taskId: "79042238-fd27-11ed-be56-0242ac120002",
        due: "",
      },
      {
        title: "Competitor Analysis",
        description:
          "Get a list of competitors and tabulate their performance and compare them to ours, recommend ways we can improve on our weak points",
        status: "Done",
        subtasks: [{ title: "Use excel to accomplish this task", done: true }],
        taskId: "807634ac-fd27-11ed-be56-0242ac120002",
        due: "",
      },
    ],
    statuses: ["Todo", "Doing", "Done"],
  },
  b8db87ce313884348a9047f97f4c7e0ab: {
    title: "Roadmap",
    id: "8db87ce3-1388-4348-a904-7f97f4c7e0ab",
    tasks: [],
    statuses: ["Todo", "Doing", "Done"],
  },
};

export default data;
