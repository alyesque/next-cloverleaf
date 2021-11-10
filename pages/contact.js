

function Contact() {
    return (
        <main>
            <div class="formflex">
                <img src='./images/contact.png' class="formflexcontent formimg" />
                <form class="formflexcontent">
                    <h2> Interested in a consultation?  Have questions about our services?  We're happy to help!</h2>
                    <span>Name:</span> <span>Email:</span>
                    <input type="text" name="" />
                    <input type="text" name="" />
                    <span>Phone:</span> <span>Subject:</span>
                    <input type="text" name="" />
                    <input type="text" name="" />
                    <span class="gridcenter">Message:</span>
                    <textarea type="text" rows="8" cols="50">
                    </textarea>
                    <button>Submit</button>
                </form>
            </div>
        </main>

    )
}

export default Contact