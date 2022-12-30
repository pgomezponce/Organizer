I would love to have a solution that allows us to have multiple projects, with notes that can link between projects and scope variant tasklists.

Even though the solution of those collaboration in sharing, the access must be able to be managed with as much detail as possible (like in enabling access to a certain note/task list/project and revoke it whenever). Do you to that, files will have a default level to be edited/built and also to be shared.

| Authorization Level | Brief summary                                                                         |
| ------------------- | ------------------------------------------------------------------------------------- |
| Visitor             | - Can see a specific file and navigate through links outside the user-managed system. | 
| Viewer              | - Can see a specific file in his user-managed system.                                 |
| Writer              | - Can edit and see a specific file in his user-managed system.                        |
| Admin               | - Can manage everyone but the Owner, share, edit and see a specific file in his user-managed system.                        |
| Owner               | - Can manage, share, edit and see a specific file in his user-managed system. He is responsible for the data stored.                        |


Even when it's authentication topic, it's not easy to track, the idea is to allow the end user to future if someone within a project has access to specific files or sharing features. This way, there is a chance to have locked on-boarding wikis, reports,...

- [ ] #todo Create digital version database UML

To implement this model in SQL there a few considerations:

- MySQL / MariaDB doesn't offer a easy solution to implement generalization / specialization. Due to this, the region in Figure 1 related to "file" and "project"/"tasklist"/"note" will be based on "class table inheritance" techniques.
- To integrate data into this model there will be developed sotred procedures / functions to properly create database entries and making a simpler entrypoint to the structure.

