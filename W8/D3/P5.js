//relationship patterns
const mongoose = require("mongoose")
async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/embrel");
        console.log("Connected to MongoDB");
        //(embedding)
        const blogSchema = new mongoose.Schema({
            title: String,
            comments: [
                {
                    text: String
                }
            ]
        });

        const Blog = mongoose.model('Blog', blogSchema);
        await Blog.deleteMany();

        const blog = await Blog.create({
            title: "Mongoose basics",
            comments: [
                { text: "Great article" },
                { text: "Helpful article" }
            ]
        });

        console.log("Embedding:");
        console.log(await Blog.find());

        //one to Many relation(referencing)
        const postSchema = new mongoose.Schema({
            title: String
        });
        const commentSchema = new mongoose.Schema({
            text: String,
            post: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Post'
            }
        });
        const Post = mongoose.model('Post', postSchema);
        const Comment = mongoose.model('comment', commentSchema);

        await Post.deleteMany();
        await Comment.deleteMany();

        const post = await Post.create({ title: "NodeJS Basics" });
        await Comment.create([
            { text: "Nice post!", post: post._id },
            { text: "good", post: post._id }
        ]);
        // console.log("Referencing:");
        // console.log(await Comment.find().populate('post'));

        //Many to Many
        const studentSchema = new mongoose.Schema({
            name: String,
            courses: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Course'
                }
            ]
        });
        const courseSchema = new mongoose.Schema({
            title: String,
            students: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Student'
                }
            ]
        });

        const Student = mongoose.model('Student', studentSchema);
        const course = mongoose.model('Course', courseSchema);

        const course1 = await course.create({ title: "MongoDB" });
        const course2 = await course.create({ title: "Node.JS" });

        const student1 = await Student.create({
            name: "varini",
            courses: [course1._id, course2._id]
        });
        const student2 = await Student.create({
            name: "Kavya",
            courses: [course2._id]
        });
        course1.students.push(student1._id, student2._id);
        course2.students.push(student2._id);
        await course1.save();
        await course2.save();

        console.log("Many-to-Many: ");
        console.log(await Student.find().populate('courses'));
        console.log(await course.find().populate('students'));
    }
    catch (error) {
        console.error("Error:", error.message);

    }
    finally {
        await mongoose.disconnect();
        console.log("Disconnected from DB");
    }
}
main();