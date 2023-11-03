# Course

![Course Structure](../images/course-structure.png)

A course is the primary entity of an LMS. This is the structure that a course in Frappe LMS follows. A course contains chapters. Chapters contain lessons. The main content of a course resides in the lesson. Chapters are used to group similar lessons.

## Create a Course

From the workspace, when you visit the portal, you will land on the Course List page. This page has various sections like Live, Upcoming, Enrolled, etc. But there is no information in them. Because you have not done any activity on the LMS yet.

![Empty State](../images/empty.png)

You can click on the **Create a Course** button to create your very first course. You will be redirected to a new page that has a form.

![Course Form](../images/course-form.png)

Fill out the form with the following details:

 - **Title:** Give your course an appropriate title.
 - **Short Introduction:** A brief line describing what the course is about.
 - **Description:** Add a detailed description about your course to help users know what your course will actually comprise.
 - **Preview Video Link:** A preview video will provide a teaser of the course. To add a preview video follow the steps mentioned [here](../miscellaneous/faq.md#how-to-add-youtube-video-in-a-lesson-or-for-course-preview).
 - **Tag:** Add relevant tags that will help users decide if this is the right course for them. A tag can indicate the difficulty level of a course, any prerequisites the course has, etc.
 - **Image:** Attach an image that is relevant to your course.
 - **Publish:** A course will appear on the website to the users only when it is published. This setting is only visible to Course Moderators.
 - **Upcoming:** If a course is about to become available to users soon but not yet, mark it as Upcoming. Note that even for an upcoming course to be visible on the website, it should be published. This setting is also only visible to Moderators.

After adding all this information. You can save the course.

![Course Saved](../images/course-saved.png)

When you save a course, you can then add chapters and lessons to it. To do so, click on the **Course Outline** button in the header next to the Course Title.

## Paid Course

If you want to users to pay a certain amount before they enroll for the course, you can make it a paid course. When creating a course, enable the Paid Course checkbox. Then enter the amount and currency. Save the course. Students will then have to pay the amount to enroll for the course.

![Paid Course](../images/paid-course.png)

::: tip Note
In order to receive payments from students make sure that you have [configured you Razorpay Account details in LMS Settings](../miscellaneous/faq.md#how-to-setup-razorpay-account-on-lms)