**SIMPLESPHERE LEARNING**

**Mentor Panel User Guidebook**

Version 1.0 \| May 2026

A complete step-by-step guide for mentors to navigate and use all
features of the SimpleSphere Mentor Portal.

# Table of Contents

1\. Login & Access Control

2\. Mentor Command Centre (Dashboard)

3\. Student Registry & Management

4\. Course Management Hub

5\. Course Profile & Enrolee Analytics

6\. Curriculum Builder & Syllabus Editor

7\. Enrolled Course Student Progress Tracker

8\. Admin Tasks & Progression Board (Kanban)

9\. Custom Assignment & Assessment Creation

10\. Assignment Submissions & Grading Ledger

11\. Classroom Attendance Matrix

12\. Technical Session Logging & SLA Registry

13\. Project Portfolio Dashboard

14\. Project Architecture & Milestone Planner

15\. Doubt Resolution Forum & SLA Manager

16\. AI Co-Pilot & Data Inquiry Engine

17\. Interactive Student Chat & File Transfer System

18\. Completion Certificate Issuance & Audit

19\. Student Document Repository

20\. Performance Analytics & Student Retention Insights

21\. Coding Arena & Interactive Compiler Editor

22\. Portal Announcements Board

23\. Settings, Profile & Password Protocols

24\. Jitsi Live Classroom Integration

25\. Quality Assurance Audit Panel

26\. In-App Notification System

27\. Secure Session Terminate (Logout)

# 1. Login & Access Control

## 1.1 Purpose

The Login Page provides secure authentication for mentors entering the
SimpleSphere Learning platform. It utilizes cookie-based session
management and integrates Google OAuth for single-sign-on verification.

## 1.2 How to Access

Navigate to the root URL or access directly via:
http://127.0.0.1:8000/login

## 1.3 Interface Overview

- **Obsidian Dark Surface Grid**: A double radial background gradient
  creating a premium glassmorphic theme.

- **Form Inputs**: Username input field (with User icon), Password input
  field (with Lock icon and a toggle show/hide eye icon).

- **Control Actions**: \"Stay logged in\" checkbox, \"Forgot Password?\"
  hyperlink.

- **Submission Trigger**: A purple \"Sign In\" button with hover glow
  effects and a loading spinner state.

- **OAuth Node**: Google Login pill-shaped button.

- **Theme Toggle**: Top-right corner button to switch between Dark (Sun
  icon) and Light (Moon icon) color systems.

- **Error Banner**: Pop-up alert banner displaying DRF authentication
  failures or network errors.

## 1.4 Available Operations

- **Credentials Authenticate**: Input local account credentials and
  submit.

- **SSO Google Authenticate**: Authenticate via third-party Google
  account popup.

- **Password Reset Request**: Click \"Forgot Password?\" to navigate to
  /forgot-password.

- **Portal Sign Up**: Click \"Sign Up\" to navigate to /signup (if
  self-registration is enabled).

- **System Theme Switching**: Toggle the system-wide visual theme.

## 1.5 Workflow

- Step 1 -- Enter your assigned username in the Username field.

- Step 2 -- Enter your password in the Password field.

- Step 3 -- (Optional) Toggle the eye icon to verify spelling.

- Step 4 -- Click Sign In. On validation success, you will be redirected
  to the Mentor Panel homepage (/mentor).

- Step 5 -- Alternately, click Sign In with Google to complete SSO
  verification.

## 1.6 Validation Rules

- **Username Field**: Must not be empty.

- **Password Field**: Must not be empty.

- **Server Responses**: Custom error displays if username/password are
  incorrect or if connection fails.

## 1.7 Screenshot

## ![](assets/media/image1.png){width="6.5in" height="3.285416666666667in"}

# 2. Mentor Command Center (Dashboard)

## 2.1 Purpose

The Mentor Dashboard serves as the command center for academic
operations. It compiles telemetry charts, SLA status metrics, scheduling
options, and shortcuts to crucial mentor systems.

## 2.2 How to Access

Accessible by default upon successful login, or via the top item in the
sidebar labeled Dashboard under path /mentor.

## 2.3 Interface Overview

- **Active System Badge**: A top header label displaying \"SYSTEM
  OPERATIONAL\" in a glowing violet bubble.

- **Global Actions**: Quick Meeting / End Meeting, Schedule, and Reports
  buttons.

- **Analytical Cards**: Four card widgets displaying counts for Assigned
  Students, Active Courses, Pending Assignments, and Weekly Message
  Volume.

- **SLA Response Monitor**: A large notification section illustrating
  feedback latency hours, graded assignment counts, and QA
  healthy/warning badges.

- **Charts Section**: Student Engagement Area Chart and Tasks Status Pie
  Chart.

- **AI Assistant Card**: Shortcut card to launch the AI assistant.

- **Recent Activity Feed**: Timeline list displaying recent chat
  messages, student submissions, and task updates.

- **Schedule Manager**: A list of upcoming Jitsi video sessions with
  Edit, Cancel, and Join buttons.

## 2.4 Available Operations

- **Start Quick Session**: Click Quick Meeting to launch an instant
  room.

- **Schedule Session**: Click Schedule to configure a future live class.

- **Download CSV Telemetry**: Click Reports to pull the compiled
  platform database registry.

- **Edit/Cancel Scheduled Meeting**: Use card controls to modify/cancel
  upcoming sessions.

- **Navigate Shortcut Modules**: Launch the AI assistant or view chat
  history.

## 2.5 Workflow

- Step 1 -- Scheduling a Class: Click the Schedule button, select the
  Course, enter Title, Description, Scheduled At, and Duration, then
  click Schedule Meeting.

- Step 2 -- Starting an Instant Class: Click Quick Meeting. When
  finished, click End Meeting to release resources.

## 2.6 Validation Rules

- **Schedule Modal**: Course (must be valid), Title (required),
  Scheduled At (future date/time), Duration (positive integer).

- **SLA Thresholds**: Internal feedback target is hardcoded to 48 hours.

## 2.7 Screenshot

![](assets/media/image2.png){width="6.5in" height="3.2875in"}

# 4. Course Management Hub

## 4.1 Purpose

The Course Hub displays all academic courses assigned to the logged-in
mentor. It acts as the gateway to syllabus editing, course analytics,
and enrolled student directories.

## 4.2 How to Access

From the sidebar under the ACADEMICS group, click My Courses (path
/mentor/my-courses).

## 4.3 Interface Overview

- **Grid Layout**: Displays course cards loaded from the assigned API
  registry.

- **Course Card Components**: Header thumbnail, body with title and
  description, footer with \"Manage Course\" button.

- **Empty State Display**: Dotted container indicating \"No courses
  assigned\" if database allocations are empty.

## 4.4 Available Operations

- **Browse Assigned Programs**: Scroll and search through current
  courses.

- **Access Management Portal**: Click on a course card to navigate to
  the respective Course Detail Page.

## 4.5 Workflow

- Step 1 -- Browse through the available course catalog cards on the
  grid.

- Step 2 -- Hover over any card to trigger smooth scaling
  transformations.

- Step 3 -- Click the card or the Manage Course button to drill down
  into modules and enrollees.

## 4.6 Validation Rules

- Courses are read-only listings on this page. Allocation maps must be
  configured by Administrators.

## 4.7 Screenshot

![](assets/media/image3.png){width="6.5in"
height="3.2756944444444445in"}

# 5. Course Profile & Enrollee Analytics

## 5.1 Purpose

The Course Detail page allows mentors to view enrollment figures, modify
thumbnails, redirect to the syllabus builder, and add students to
specific courses.

## 5.2 How to Access

Click on any course card from the My Courses registry page, navigating
to path /mentor/my-courses/:id.

## 5.3 Interface Overview

- **Header Navigation**: \"Back to Courses\" breadcrumb.

- **Course Summary**: Displays Title and Description.

- **Action Control Buttons**: Edit Thumbnail, Edit Syllabus, and Add
  Student.

- **Banner Frame**: Renders the active course thumbnail image.

- **Enrollee Grid**: Lists all student names, emails, and admission
  dates.

- **Modals**: Add Student Modal (searchable selector) and Update
  Thumbnail Modal (text input for image URL).

## 5.4 Available Operations

- **Assign New Student**: Add students directly to this class module.

- **Update Display Material**: Input a new thumbnail link to update
  visual assets.

- **Launch Builder**: Redirect to syllabus curriculum page.

## 5.5 Workflow

- Step 1 -- Assigning a Student: Click Add Student, type a name or
  email, locate the student and click the Plus (+) icon.

- Step 2 -- Modifying Course Thumbnail: Click Edit Thumbnail, paste a
  valid image link, click Save Thumbnail.

## 5.6 Validation Rules

- **Student Search**: Requires a minimum of 2 characters before querying
  records.

- **Thumbnail URL**: Must be a valid HTTP/HTTPS link.

- Enrolled students list updates automatically upon addition.

## 5.7 Screenshot

![](assets/media/image4.png){width="6.5in" height="3.285416666666667in"}

# 6. Curriculum Builder & Syllabus Editor

## 6.1 Purpose

The Curriculum Builder is a workspace where mentors design, order, and
edit course modules, lectures, quizzes, and assignments. Mentors can
also submit course drafts to HQ for administrative review.

## 6.2 How to Access

Navigate via the Edit Syllabus button from the Course Detail Page, or
directly via path /mentor/courses/:id/content.

## 6.3 Interface Overview

- **Basics / Curriculum / Additional Tabs**: Three steps guiding
  syllabus construction.

- **Workflow Header**: Displays Course Status Badge (Draft, Pending
  Approval, Rejected, Published).

- **Header Actions**: Preview Player, Submit to HQ, and Update Course
  buttons.

- **Curriculum Tab Accordion**: Lists modules with nested Lessons,
  Quizzes, and Assignments.

- **Modals**: Item Form Modal for content editing and Question Form
  Modal for quiz questions.

## 6.4 Available Operations

- **Manage Modules**: Create, Edit, or Delete modular curriculum
  folders.

- **Manage Lessons (Lectures)**: Write text guides, specify YouTube
  paths, and set duration minutes.

- **Manage Assignments**: Outline project guidelines and define pass
  score thresholds.

- **Manage Quizzes**: Define limits, pass percentages, and build
  questionnaires.

- **Submit for Review**: Request HQ authorization.

## 6.5 Workflow

- Step 1 -- Adding a Quiz Question: Select a Quiz item, click Questions,
  click Add Question, enter Question Text and options, choose the
  correct option, click Save Question.

- Step 2 -- Adding a Module: Click Create New Module, input Title and
  Description, click Save Module.

## 6.6 Validation Rules

- **Course Status Restraints**: If status is Pending Approval, content
  modification options are disabled.

- **Assignment Form**: Pass points must be equal to or less than total
  points.

- **Quiz Form**: Pass percentage must be between 1 and 100.

## 6.7 Screenshot

![](assets/media/image5.png){width="6.5in" height="3.292361111111111in"}

# 7. Enrolled Course Student Progress Tracker

## 7.1 Purpose

The Course Student Progress Tracker displays academic analytics for
students enrolled in a selected course. Mentors can evaluate lagging
students, review quiz score averages, and launch direct chats.

## 7.2 How to Access

From the sidebar under the ACADEMICS group, click Course Students (path
/mentor/course-students).

## 7.3 Interface Overview

- **Course Selector Dropdown**: Selects from assigned courses.

- **Counter Badge**: Illustrates active enrollment counts.

- **Students Grid**: Student Cards showing name, email, completion
  status, progress bars, average quiz score, and chat button.

- **Analytics Details Modal**: Detailed metrics including total
  completed lectures/assignments and date enrolled.

## 7.4 Available Operations

- **Query Enrollee Lists**: Select a course to view student performance
  cards.

- **Inspect Detailed Analytics**: Click on any card to launch the
  Student Analytics detail modal.

- **Navigate to Chat**: Click the chat button to launch conversation
  thread.

## 7.5 Workflow

- Step 1 -- Select the course from the dropdown.

- Step 2 -- Analyze progress bars (purple for lectures, green for
  assignments).

- Step 3 -- Click on a student\'s card to review progress metrics.

- Step 4 -- Click Open Chat to message the student.

## 7.6 Validation Rules

- **Data Dependency**: The student grid remains hidden until a valid
  course is selected.

- **Completion Flag**: Renders a \"Completed\" badge if the student has
  finished all course contents.

## 7.7 Screenshot

![](assets/media/image6.png){width="6.5in"
height="3.2819444444444446in"}

# 8. Admin Tasks & Progression Board (Kanban)

## 8.1 Purpose

The Mentor Tasks progression board tracks operational duties assigned to
the mentor by the administrator. It utilizes a drag-and-drop Kanban
workflow.

## 8.2 How to Access

From the sidebar under the CORE group, click Mentor Tasks (path
/mentor/tasks).

## 8.3 Interface Overview

- **Kanban Columns**: Three visual columns --- To Do, In
  Progress/Active, and Completed/Done.

- **Task Cards**: Shows title, description, priority, due date, and
  creator.

- **Status Indicator**: Illustrates active status sync messages.

## 8.4 Available Operations

- **View Assigned Tasks**: Read administrative tasks and deadlines.

- **Update Task Progress**: Drag and drop cards to change status.

## 8.5 Workflow

- Step 1 -- Select a task card from the To Do column.

- Step 2 -- Drag and drop the card to In Progress as you begin work.

- Step 3 -- Once completed, drag the card to the Completed column.

- Step 4 -- Status sync updates automatically in the background.

## 8.6 Validation Rules

- **Optimistic Updates**: Changes are reflected locally first. If
  database sync fails, the card reverts automatically and shows a toast
  warning.

## 8.7 Screenshot

![](assets/media/image7.png){width="6.5in" height="3.292361111111111in"}

# 9. Custom Assignment & Assessment Creation

## 9.1 Purpose

The Custom Assignment page serves as the control panel for assigning
homework and assessments to students, allowing mentors to manage due
dates and review submissions.

## 9.2 How to Access

From the sidebar under the ACADEMICS group, click Create Assignments
(path /mentor/tasks-create).

## 9.3 Interface Overview

- **Add Assignment Button**: Spawns creation form.

- **Registry Table**: Lists active assignments showing title,
  description, due date, target course/student, and actions.

- **Actions Button Group**: Submissions, Edit, and Delete.

- **Creation Modal Form**: Contains inputs for Title, Description, Due
  Date, Course dropdown, and Student dropdown.

## 9.4 Available Operations

- **Publish Homework**: Create assessments for classes or individual
  students.

- **Update Parameters**: Change due dates or descriptions.

- **Remove Assessment**: Remove records from the database.

## 9.5 Workflow

- Step 1 -- Click New Assignment.

- Step 2 -- Enter Title and Description.

- Step 3 -- Set the Due Date.

- Step 4 -- Select the target Course.

- Step 5 -- (Optional) Select a specific Student (dropdown filters
  students enrolled in the selected course).

- Step 6 -- Click Save.

## 9.6 Validation Rules

- **Due Date**: Must be set.

- **Student Filtering**: Student selection dropdown remains disabled
  until a course is chosen.

## 9.7 Screenshot

*\[Screenshot: 09_assignments_creation\]*

# 10. Assignment Submissions & Grading Ledger

## 10.1 Purpose

The Assignment Submissions page is a grading ledger where mentors review
answers submitted by students, leave feedback, and update grading
statuses.

## 10.2 How to Access

From the sidebar under the CORE group, click Assignment Review (path
/mentor/assignments-review).

## 10.3 Interface Overview

- **Double Tab Panel**: Toggle between Manage (Create Tab) and Review
  Submissions (Review Tab).

- **Review List**: Displays submitted answers including student name,
  email, submission date, status badge, and answer text.

- **Feedback Module**: Text area input with a purple Send icon to commit
  feedback.

## 10.4 Available Operations

- **Browse Submissions**: Read student answers.

- **Submit Evaluations**: Type custom feedback and click Send.

## 10.5 Workflow

- Step 1 -- Navigate to the Review tab.

- Step 2 -- Select the assignment from the dropdown list.

- Step 3 -- Review student submissions.

- Step 4 -- Input comments in the Feedback box.

- Step 5 -- Click the Send (Paperplane) icon. The status badge will
  update to \'reviewed\' on success.

## 10.6 Validation Rules

- Status toggles automatically from \'submitted\' to \'reviewed\' upon
  feedback submission.

## 10.7 Screenshot

![](assets/media/image8.png){width="5.8in" height="3.176365923009624in"}

# 11. Classroom Attendance Matrix

## 11.1 Purpose

The Attendance Matrix allows mentors to track student attendance. It
features progress bars and an interactive monthly calendar view for
marking attendance.

## 11.2 How to Access

From the sidebar under the CORE group, click Attendance (path
/mentor/attendance).

## 11.3 Interface Overview

- **Stats Row**: Cards for Today Present, Today Absent, Marked Today,
  and Average Attendance.

- **Student Matrix Table**: Columns for Student Name/Email, Course,
  Attendance Index percentage bar, and actions.

- **Calendar View**: Monthly calendar with Mark Present (Checkmark),
  Mark Absent (X icon), and Clear Attendance (Trash icon) action
  buttons.

## 11.4 Available Operations

- **Log Daily Attendance**: Mark student status in calendar boxes.

- **Clear Records**: Erase logs using the trash icon.

- **Monitor Trends**: Review CSAT attendance percentage indicators.

## 11.5 Workflow

- Step 1 -- Navigate to /mentor/attendance.

- Step 2 -- Locate a student in the table and click View Profile.

- Step 3 -- Use the Monthly Calendar --- click the Checkmark button to
  mark Present, or the X button to mark Absent.

- Step 4 -- Click the Trash icon to clear attendance.

## 11.6 Validation Rules

- **Future Dates**: Calendar boxes for future dates are disabled
  (opacity 0.4).

- **CSRF Verification**: All logging actions require a valid token
  header.

## 11.7 Screenshot

![](assets/media/image9.png){width="6.5in"
height="3.2756944444444445in"}

# 12. Technical Session Logging & SLA Registry

## 12.1 Purpose

The Technical Ledger allows mentors to document session notes,
summaries, and blockers. It automatically checks for SLA logging delays.

## 12.2 How to Access

From the sidebar under the ACADEMICS group, click Session Notes (path
/mentor/session-notes).

## 12.3 Interface Overview

- **Action Header**: \"Log New Interaction\" toggle button.

- **Historical Table**: Displays past notes including topic, date,
  start/end times, and SLA status.

- **Creation Form Panel**: Filter by Course, Student selector, Technical
  Agenda input, Execution Date and times, and Summary & Blockers
  textarea.

- **SLA Advisory Banner**: Glowing warning panel displaying \"SLA BREACH
  ADVISORY\" if notes are submitted late.

## 12.4 Available Operations

- **Register Interactions**: Create detailed summaries of student
  meetings.

- **Audit Logs**: Review past logs and check if they breached the SLA.

## 12.5 Workflow

- Step 1 -- Click Log New Interaction.

- Step 2 -- Select the Course and choose the Student.

- Step 3 -- Enter the Technical Agenda topic.

- Step 4 -- Enter the Execution Date, Start Time, and End Time.

- Step 5 -- Write detailed notes in the Summary & Blockers field.

- Step 6 -- Click Log Interaction.

## 12.6 Validation Rules

- **SLA Breach Threshold**: If the entry is logged more than 4 hours
  after the session\'s end time, it is flagged as an SLA breach.

- **Time Logic**: Start time must be before end time.

## 12.7 Screenshot

![](assets/media/image10.png){width="5.8in"
height="3.176365923009624in"}

# 13. Project Portfolio Dashboard

## 13.1 Purpose

The Project Portfolio Dashboard manages structured student projects.
Mentors can create projects, assign student teams, and monitor
milestones.

## 13.2 How to Access

From the sidebar under the CORE group, click Projects (path
/mentor/projects).

## 13.3 Interface Overview

- **Header Action**: \"New Project\" button.

- **Search Bar**: Input field filtering project cards by title or
  domain.

- **Stats Row**: Total, Easy, Medium, and Hard project count widgets.

- **Project Grid**: Cards displaying domain badges, project title,
  duration in weeks, allocated student counts, and milestone counts.

## 13.4 Available Operations

- **Create Project**: Click New Project to open the setup modal.

- **Audit Projects**: Browse the project catalog.

## 13.5 Workflow

- Step 1 -- Click New Project.

- Step 2 -- Input Project Title and Description.

- Step 3 -- Select the target Course.

- Step 4 -- Choose the Student to allocate (only students enrolled in
  the selected course are shown).

- Step 5 -- Specify the Domain and Duration (Weeks).

- Step 6 -- Click Create Project.

## 13.6 Validation Rules

- **Duration**: Must be a positive integer (minimum 1 week).

- **Course Selection**: Must be selected before assigning a student.

## 13.7 Screenshot

![](assets/media/image11.png){width="6.5in"
height="3.285416666666667in"}

# 14. Project Architecture & Milestone Planner

## 14.1 Purpose

The Project Detail planner manages milestones and tasks for a specific
student project. Mentors can allocate students, track task progress, and
review submissions.

## 14.2 How to Access

Click on any project card in the Projects Dashboard, navigating to path
/mentor/projects/:id.

## 14.3 Interface Overview

- **Top Actions**: \"Add Milestone\" and \"Assign Student\" buttons.

- **Allocations Card**: Lists assigned students and progress bars.

- **Milestone Timeline**: Displays milestones with deadlines and nested
  task lists.

- **Modals**: Task Modal, Review Modal (with Approved/Needs Revision
  status), and Comments Drawer.

## 14.4 Available Operations

- **Manage Milestones**: Create structured phases.

- **Issue Tasks**: Assign tasks with priority (Low, Medium, High).

- **Evaluate Submissions**: Review student answers and assign marks.

- **Resolve Doubts**: Answer questions in the comments section.

## 14.5 Workflow

- Step 1 -- Creating a Milestone: Click Add Milestone, enter Milestone
  Name and set the Deadline, click Save.

- Step 2 -- Reviewing a Task: Open a task card and click Review, select
  status (Approved or Needs Work), enter Marks and Feedback, click
  Submit Review.

## 14.6 Validation Rules

- **Task Assignees**: Tasks can only be assigned to students allocated
  to the parent project.

## 14.7 Screenshot

![](assets/media/image12.png){width="5.8in"
height="3.176365923009624in"}

# 15. Doubt Resolution Forum & SLA Manager

## 15.1 Purpose

The Doubt Resolution Forum manages student inquiries. It tracks open
questions, escalation statuses, and SLA deadlines.

## 15.2 How to Access

From the sidebar under the COMMUNICATION group, click Discussions (path
/mentor/discussions).

## 15.3 Interface Overview

- **Stats Metrics Bar**: Displays Total Signals, Open, Resolved, and SLA
  Breached counts.

- **Filter Row**: Search query input and status tabs (All, Open,
  Resolved, Escalated).

- **Thread List**: Lists student queries showing course titles, reply
  counts, and SLA status badges.

- **Detail View**: Displays the conversation thread, escalation toggle,
  and \"Mark Resolved\" button.

## 15.4 Available Operations

- **Answer Inquiries**: Post replies to open questions.

- **Escalate Doubts**: Flag questions for admin review by clicking
  Escalate.

- **Resolve Inquiries**: Toggle resolution status.

## 15.5 Workflow

- Step 1 -- Select a thread from the list.

- Step 2 -- Review the question and history.

- Step 3 -- Type a reply in the text area.

- Step 4 -- Click Send Reply.

- Step 5 -- Click Mark Resolved to close the inquiry.

## 15.6 Validation Rules

- **SLA Breach Threshold**: Inquiries have a response deadline. If
  breached, the card displays a red \"SLA BREACHED\" badge.

- **Escalation**: Toggling Escalate changes the state on the server and
  highlights the thread in red.

## 15.7 Screenshot

![](assets/media/image13.png){width="5.8in"
height="3.176365923009624in"}

# 16. AI Co-Pilot & Data Inquiry Engine

## 16.1 Purpose

The AI Assistant page acts as a co-pilot for mentors, answering queries
about student progress, course metrics, and lagging students.

## 16.2 How to Access

From the sidebar under the COMMUNICATION group, click AI Assistant (path
/mentor/ai-assistant).

## 16.3 Interface Overview

- **Header Area**: Sparkle badge indicating \"Intelligent Mentor
  Assistant\".

- **Chat Window**: Displays conversation bubble history between the
  mentor and AI.

- **Suggestion Chips**: Quick-click suggestion buttons for common
  queries.

- **Input Form**: Text input with a magic wand icon and a send button.

## 16.4 Available Operations

- **Query AI Assistant**: Type custom questions or click suggestion
  chips.

## 16.5 Workflow

- Step 1 -- Navigate to the AI Assistant page.

- Step 2 -- (Optional) Click a suggestion chip (e.g. \"How many students
  are at risk?\").

- Step 3 -- Alternately, type a query in the message box.

- Step 4 -- Click Send to receive data insights from the AI.

## 16.6 Validation Rules

- Input cannot be empty.

- **Disclaimer**: Responses are generated by AI and should be verified.

## 16.7 Screenshot

![](assets/media/image14.png){width="6.5in"
height="3.2819444444444446in"}

# 17. Interactive Student Chat & File Transfer System

## 17.1 Purpose

The Chat System provides direct messaging and file sharing between
mentors and students, with support for images, videos, and documents.

## 17.2 How to Access

From the sidebar under the COMMUNICATION group, click Chats (path
/mentor/chats).

## 17.3 Interface Overview

- **Sidebar Contact List**: Searchable list of students showing names,
  initials avatars, last message summaries, and timestamps.

- **Chat Header**: Displays active student name and status.

- **Message Thread**: Displays sent and received messages, images, video
  players, and file download cards.

- **Input Footer**: File attachment button (paperclip), text input, and
  send button.

## 17.4 Available Operations

- **Send Messages**: Chat in real-time with students.

- **Share Files**: Upload files from local storage, camera, or URLs.

- **Download Files**: Click file cards in messages to download.

## 17.5 Workflow

- Step 1 -- Sharing a File: Click the Paperclip icon, the Cloudinary
  Upload Widget will open, complete the upload, type an optional
  message, and click Send.

## 17.6 Validation Rules

- **File Size**: Maximum size limit is 10MB.

- **Supported Formats**: Images, PDF, DOCX, XLSX, PPTX, TXT, ZIP, MP4,
  MP3.

- **Refresh Rate**: History polls the server every 5 seconds.

## 17.7 Screenshot

![](assets/media/image15.png){width="5.8in"
height="3.176365923009624in"}

# 18. Completion Certificate Issuance & Audit

## 18.1 Purpose

The Certificates page allows mentors to view students\' course
completion and certification status, and download issued certificates.

## 18.2 How to Access

From the sidebar under the ACADEMICS group, click Certificates (path
/mentor/certificates).

## 18.3 Interface Overview

- **Filter Row**: Search bar input (searches student or course names)
  and Course filter dropdown.

- **Certificates Table**: Columns for Student Name, Course, Status
  (Downloaded/Pending), Certificate ID, and Actions.

- **Actions Column**: Download icon (Award badge button) directing to
  the certificate PDF generation API.

## 18.4 Available Operations

- **Audit Certification Status**: Review completed courses and check if
  certificates have been issued.

- **Download Certificates**: Download certificate PDFs.

## 18.5 Workflow

- Step 1 -- Navigate to the Certificates page.

- Step 2 -- Locate the student using search or filters.

- Step 3 -- Verify status. If marked \"Downloaded\", the Certificate ID
  is displayed.

- Step 4 -- Click the Award (Badge) icon under actions to download the
  PDF.

## 18.6 Validation Rules

- **Certificate ID**: Only students with issued certificates have
  download actions available.

## 18.7 Screenshot

![](assets/media/image16.png){width="6.5in"
height="3.285416666666667in"}

# 19. Student Document Repository

## 19.1 Purpose

The Student Documents page manages paperwork and files uploaded by
students, such as ID proofs, certificates, and admission files.

## 19.2 How to Access

From the sidebar under the ACADEMICS group, click Student Docs (path
/mentor/student-docs).

## 19.3 Interface Overview

- **Actions Header**: Course filter dropdown and \"Upload Document\"
  button.

- **Search Bar**: Input field filtering documents by title or student
  name.

- **Document Grid**: Cards showing title, student name, upload date,
  download button, and delete button.

- **Upload Modal**: Form containing Document Title, Course filter,
  Student selector, and file dropzone.

## 19.4 Available Operations

- **Upload Document**: Upload student paperwork manually.

- **Download Files**: Download student documents.

- **Delete Document**: Remove documents from the database.

## 19.5 Workflow

- Step 1 -- Click Upload Document.

- Step 2 -- Enter Document Title and select the Course.

- Step 3 -- Select the target Student.

- Step 4 -- Select the file in the dropzone.

- Step 5 -- Click Start Upload.

## 19.6 Validation Rules

- **File Constraints**: Maximum file size limit is 10MB.

- **File Formats**: Accepts PDF, DOCX, XLSX, and PNG.

## 19.7 Screenshot

![](assets/media/image17.png){width="6.5in"
height="3.2784722222222222in"}

# 20. Performance Analytics & Student Retention Insights

## 20.1 Purpose

The Performance Analytics page lists course metrics, performance
distributions, and lagging students, helping mentors identify those at
academic risk.

## 20.2 How to Access

From the sidebar under the CORE group, click Course Analytics (path
/mentor/analytics).

## 20.3 Interface Overview

- **Quick Stats Bar**: Active Students, Avg Completion (rate %), Avg
  Quiz Score (%), and Needs Grading cards.

- **Distribution Charts**: Performance Distribution PieChart and
  Enrollment Trends BarChart.

- **Academic Risk List**: List of lagging students showing name, course,
  actual vs expected progress, and lag percentage.

- **Smart Insights**: Advice boxes detailing grading queues and student
  success profiles.

## 20.4 Available Operations

- **Review Lagging Students**: Analyze students flagged in the risk
  list.

- **Audit Grade Distributions**: Review performance bands to adjust
  course materials.

## 20.5 Workflow

- Step 1 -- Navigate to /mentor/analytics.

- Step 2 -- Analyze the Needs Grading and Avg Quiz Score metrics.

- Step 3 -- Review the Students at Academic Risk list.

- Step 4 -- Read the Smart Insights for recommendations on improving
  student retention.

## 20.6 Validation Rules

- **At-Risk Criteria**: Students are flagged as at-risk if their actual
  progress lags behind expected progress by a set percentage.

## 20.7 Screenshot

![](assets/media/image18.png){width="6.5in"
height="3.2888888888888888in"}

# 21. Coding Arena & Interactive Compiler Editor

## 21.1 Purpose

The Code Arena allows mentors to create and manage coding problems, test
cases, examples, and starter code templates for students.

## 21.2 How to Access

From the sidebar under the ACADEMICS group, click Code Arena (path
/mentor/coding).

## 21.3 Interface Overview

- **Stats Row**: Total, Easy, Medium, and Hard question counters.

- **Problem List Accordion**: Lists coding questions with category tags
  and difficulty levels.

- **Create/Edit Problem Modal Form**: Inputs for Title, Difficulty,
  Tags, Description, Constraints, Examples, Test Cases, and Starter Code
  Monaco Editor.

## 21.4 Available Operations

- **Publish Problem**: Click New Problem to open the setup form.

- **Modify Problem**: Click the Edit icon on a question to change its
  configuration.

- **Delete Problem**: Click the Trash icon to remove a question.

## 21.5 Workflow

- Step 1 -- Click New Problem.

- Step 2 -- Enter Title, select Difficulty, and choose Tags.

- Step 3 -- Write the Problem Description and Constraints.

- Step 4 -- Click Add Example and fill in input, output, and
  explanation.

- Step 5 -- Click Add Test Case and enter input and expected output.

- Step 6 -- Select language and customize the starter code in the
  editor.

- Step 7 -- Click Publish Problem.

## 21.6 Validation Rules

- **Title & Description**: Both fields are required.

- **Test Cases**: Must have at least one test case containing valid
  inputs and outputs.

## 21.7 Screenshot

*\[Screenshot: 21_coding_sandbox\]*

# 22. Portal Announcements Board

## 22.1 Purpose

The Announcements page allows mentors and admins to post portal
notifications, pinning important messages to the top of the board.

## 22.2 How to Access

From the sidebar under the CORE group, click Announcements (path
/mentor/announcements).

## 22.3 Interface Overview

- **Actions Header**: Filter Priority dropdown and \"Create
  Announcement\" button.

- **Announcement List**: Displays pinned announcements first (with a
  gold border), followed by regular cards with priority badges, target
  badges, author, date, and actions.

- **Announcements Modal Form**: Inputs for Title, Target, Priority,
  Content, and Pinned status.

## 22.4 Available Operations

- **Publish Notifications**: Create portal announcements.

- **Manage Announcements**: Edit or delete announcements.

## 22.5 Workflow

- Step 1 -- Click Create Announcement.

- Step 2 -- Enter Title and select the Target Audience (Everyone,
  Students Only, Mentors Only).

- Step 3 -- Select the Priority and write the message Content.

- Step 4 -- (Optional) Check the Pinned status box.

- Step 5 -- Click Publish.

## 22.6 Validation Rules

- **Permissions**: Announcements can only be created, edited, or deleted
  by users with mentor or admin roles.

- **Title & Content**: Fields are required.

## 22.7 Screenshot

![](assets/media/image19.png){width="6.5in"
height="3.292361111111111in"}

# 23. Settings, Profile & Password Protocols

## 23.1 Purpose

The Settings page manages profile preferences and security credentials,
allowing mentors to update passwords and change system themes.

## 23.2 How to Access

From the sidebar under the SYSTEM group, click Preferences (path
/mentor/settings).

## 23.3 Interface Overview

- **Double Tab Navigation**: Toggle between Student Identity (Profile
  Tab) and Security Protocols (Password Tab).

- **Profile Tab**: Displays Read-only boxes showing full name, username,
  and level role.

- **Password Tab**: Password update form containing Old Password, New
  Password, and Confirm Password fields.

## 23.4 Available Operations

- **Update Password**: Update account credentials.

- **Toggle Password Visibility**: Click the eye icons to view/hide
  passwords.

## 23.5 Workflow

- Step 1 -- Select the Security Protocols tab.

- Step 2 -- Enter Current Access Key (Old Password).

- Step 3 -- Enter New Access Key and re-enter in Confirm New Key.

- Step 4 -- Click Initialize Protocol Update.

## 23.6 Validation Rules

- **Password Matching**: New Password and Confirm Password must match.

- **Change Password Endpoint**: Submits to POST
  /api/auth/change-password/.

## 23.7 Screenshot

![](assets/media/image20.png){width="6.5in"
height="3.2888888888888888in"}

# 24. Jitsi Live Classroom Integration

## 24.1 Purpose

The Live Classroom handles video conferences and live interactive
sessions, utilizing Jitsi videoconferencing.

## 24.2 How to Access

Triggered by starting or joining a meeting from the Dashboard
(navigating to path /mentor/meeting).

## 24.3 Interface Overview

- **Top Actions Bar**: Displays room status and contains an End Meeting
  button.

- **Meeting Room Frame**: Fullscreen Jitsi video frame.

- **Classroom Toolbar Controls**: Buttons for Microphone, Camera, Screen
  Share, Chat, Participants List, Tile View, and Hangup.

## 24.4 Available Operations

- **End Class Session**: Close the classroom and update meeting records.

- **Classroom Controls**: Manage video feed, audio, and screen sharing.

## 24.5 Workflow

- Step 1 -- Start/join a meeting from the dashboard.

- Step 2 -- The Jitsi classroom frame loads in full screen.

- Step 3 -- Manage the class using mic, camera, and chat controls.

- Step 4 -- Click End Meeting in the top bar to close the Jitsi frame.

## 24.6 Validation Rules

- **Lobby Settings**: Lobby and pre-join screens are disabled by
  default.

- **Moderator Role**: Mentors join Jitsi sessions with moderator
  privileges.

## 24.7 Screenshot

*\[Screenshot: 24_meeting\]*

# 25. Quality Assurance Audit Panel

## 25.1 Purpose

The Quality Assurance Audit page tracks mentor performance, CSAT
compliance, SLA stats, and retraining statuses.

## 25.2 How to Access

From the sidebar under the CORE group, click My Quality Audit (path
/mentor /quality).

## 25.3 Interface Overview

- **Stats Row**: Cards for Network Performance, Certified Nodes, SLA
  Compliance %, and At Risk Entities.

- **Charts Row**: Entity Distribution PieChart, Dropout Vectors
  PieChart, and Engagement Latency BarChart.

- **Audit Registry Table**: Columns for Entity, CSAT, SLA compliance,
  Placement, Retraining status, and Score. Search bar included.

## 25.4 Available Operations

- **Inspect Quality Audit**: Track CSAT rating averages.

- **Search Registry**: Find records by mentor name.

## 25.5 Workflow

- Step 1 -- Navigate to /admin/quality.

- Step 2 -- Review statistics cards and distribution charts.

- Step 3 -- In the Audit Registry table, search for your name to review
  performance metrics.

- Step 4 -- Review the Retraining status column.

## 25.6 Validation Rules

- CSAT progress bars display ratings dynamically, coloring scores green
  (\>80%), yellow (\>50%), or red (\<50%).

## 25.7 Screenshot

![](assets/media/image21.png){width="6.5in"
height="3.2784722222222222in"}

# 26. In-App Notification System

## 26.1 Purpose

The in-app notification system provides mentors with real-time updates
regarding student submissions, class reminders, query updates, and admin
tasks.

## 26.2 How to Access

Click the Bell icon in the top header action area of any page under the
/mentor path.

## 26.3 Interface Overview

- **Bell Icon Toggle**: Glow-on-hover button showing a red counter badge
  for unread items.

- **Dropdown Container**: Obsidian dark surface container containing
  scrollable notification items.

- **Action Link**: \"Mark all as read\" button at the top right of the
  dropdown.

- **Notification Cards**: Displays title, body message, category icon,
  and relative timestamp. Unread cards have a glowing primary color
  backdrop.

## 26.4 Available Operations

- **Toggle Dropdown**: Click the bell icon to open or close the
  notification panel.

- **Read Notification**: Click any notification to navigate to its
  associated hyperlink and automatically mark it as read.

- **Mark All as Read**: Dismiss all active alert backdrops.

## 26.5 Workflow

- Step 1 -- Click the Bell icon in the header.

- Step 2 -- Scroll through the list of recent notifications.

- Step 3 -- Click a notification to view its details. The interface will
  redirect you to the relevant page.

- Step 4 -- (Optional) Click Mark all as read to clear all alert
  backdrops.

## 26.6 Validation Rules

- **Unread Count Limit**: Renders \'9+\' if the unread count exceeds 9.

- **Auto-Read Sync**: Clicking a notification triggers a POST call to
  /api/notifications/:id/read/ to update read state.

- **Polling Frequency**: Automatically polls /api/notifications/ and
  /api/notifications/unread-count/ every 60 seconds.

## 26.7 Screenshot

![](assets/media/image22.png){width="6.5in"
height="3.2958333333333334in"}

# 27. Secure Session Terminate (Logout)

## 27.1 Purpose

The Logout mechanism terminates the active authenticated session,
clearing browser session state, cookie tokens, and redirecting the user
back to the login screen.

## 27.2 How to Access

Click the LOGOUT button at the bottom of the left-hand navigation
sidebar.

## 27.3 Interface Overview

- **Logout Sidebar Trigger**: A purple button at the very bottom of the
  sidebar with a Logout (door-exit) icon.

- **Confirmation Modal**: A centered glassmorphic dialog with Alert
  Title \"Confirm Logout\", Warning Text, Cancel Button, and Confirm
  Button.

## 27.4 Available Operations

- **Trigger Modal**: Click the logout button in the sidebar.

- **Cancel Logout**: Click Cancel to return to the active page.

- **Execute Logout**: Click the confirm logout button.

## 27.5 Workflow

- Step 1 -- Click LOGOUT at the bottom of the sidebar.

- Step 2 -- When the confirmation modal appears, click Logout to
  proceed.

- Step 3 -- The system clears session states and redirects you to the
  login page (/login).

## 27.6 Validation Rules

- **Session Destruction**: Sends a POST request to /api/auth/logout/ to
  invalidate session tokens on the server.

- **Route Protection**: Once signed out, trying to navigate to
  /mentor/\* paths will automatically redirect the user to /login.

## 27.7 Screenshot

![](assets/media/image23.png){width="6.5in"
height="3.2819444444444446in"}
