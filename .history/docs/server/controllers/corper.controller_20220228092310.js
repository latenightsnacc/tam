const db = require("../models");
const Corper = db.corpers;
const ProfilePic = db.uploads;
const Attendance = db.attendance;
const MonthlyDues = db.monthlydues;
const ProjectFees = db.projectdues;
const EventFees = db.eventdues;
const Op = db.Sequelize.Op;


// Create Corper Profile
exports.createCorper = async (req, res) => {
    
    try{
        if(!req.body){
            res.status(400).send({
                message: "Form fields incomplete!"
            })
            return;
        }
        const corper = {
            firstname: req.body.firstname,
            surname: req.body.surname,
            batch: req.body.batch,
            statecode: req.body.statecode,
            cdsGroup: req.body.cdsGroup,
            lga: req.body.lga,
            ppa: req.body.ppa,
            email: req.body.email,
            phoneNo: req.body.phoneNo,
            password: req.body.statecode,
            status: req.body.status,
            role: req.body.role,
            state: req.body.state 
        }
        console.log(req.file);
        if(req.file === undefined) {
            return res.send("Please select an image file.")
        }
        const profilePic = {
            type: req.file.mimetype,
            name: req.file.originalname,
            data: 'http://localhost:3000/images/'+req.file.filename,
        }
        
        Corper.create(corper)
        .then(() => {
            ProfilePic.create(profilePic).then((image) => {
                fs.writeFileSync('./public/images'+image.name, image.data)
                return res.send('File has been uploaded');
            }).catch(error => {
                console.log(error);
                return res.send(`Error when trying to upload images: ${error}`)
            })
        })
        .then(data => {
            console.log("Corper's profile created: "+ corper);
            res.send(data);
            return Corper;
        }).catch(err => {
            console.log(err);
            res.status(500).send({
                message:
                    err.message || "Error occured while creating profile. "
            });
        });
        
    }catch(e){
        console.log(e)
    }
    
    // Create corper
    

    
}

// Retrieve All Active Corpers where CDS = CDS
exports.findAllCorpers = (req,res) => {
    const cds = req.params.cds;
    Corper.findAll({
        where: {
            cdsGroup: cds,
            status: "Active"
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
        res.status(500).send({
            message:
                err.message || "Some error occured while retrieving corpers."
        })
    })
}
// Retrieve Corper by id
exports.findCorper = (req,res) => {
    const id = req.params.id;
    Corper.findOne({
        where: {id: id}
    }).then(data => {
        res.send(data)
    }).catc(err => {
        console.log(err);
        res.status(500).send({
            message:
                err.message || "Some error occured while retrieving corper."
        })
    })
}

// Update Corper by id
exports.updateCorper = (req,res) => {
    const id = req.params.id;
    Corper.update(req.body, {
        where:{ id: id}
    }).then(data => {
        if(data == id) {
            res.send({
                message: "Corper profile updated!"
            })
        } else {
            res.send({
                message: `Cannot update Corper Profile with id=${id}.`
            })
        }
        
    }).catch(err => {
        console.log(err);
        res.status(500).send({
            message: `Error updating Tutorial with id=${id}`
        })
    })
}
exports.createAttendance = (corperId, attendance) => {   
    return Attendance.create({
        date: attendance.date,
        month: attendance.month,
        year: attendance.year,
        type: attendance.type,
        status: attendance.status,
        comment: attendance.comment,
        corperId: corperId,
    }).then( (attendance) => {
        console.log("Attendance recorded" + JSON.stringify(attendance, null,4));
        return attendance;
    }).catch((err) => {
        console.log("Errow while creating attendance record: " + err);
    })
}
exports.createMonthlyDues = (corperId, monthlydues) => {   
    return MonthlyDues.create({
        date: monthlydues.date,
        month: monthlydues.month,
        year: monthlydues.year,
        type: monthlydues.type,
        paymentStatus: monthlydues.paymentStatus,
        amountPaid: monthlydues.amountPaid,
        corperId: corperId,
    }).then( (attendance) => {
        console.log("Monthly dues recorded" + JSON.stringify(monthlydues, null,4));
        return attendance;
    }).catch((err) => {
        console.log("Errow while recording monthly dues: " + err);
    })
}
exports.createProjectFees = (corperId, projectfees) => {   
    return ProjectFees.create({
        batch: projectfees.batch,
        title:projectfees.title,
        date: projectfees.date,
        month: projectfees.month,
        year: projectfees.year,
        paymentStatus: projectfees.paymentStatus,
        amountPaid: projectfees.amountPaid,
        corperId: corperId,
    }).then( (projectfees) => {
        console.log("Project Fees recorded:" + JSON.stringify(projectfees, null,4));
        return attendance;
    }).catch((err) => {
        console.log("Errow while recording project fees: " + err);
    })
}
exports.createEventFees = (corperId, eventfees) => {   
    return EventFees.create({
        title: eventfees.title,
        date: eventfees.date,
        month: eventfees.month,
        year: eventfees.year,
        paymentStatus: eventfees.paymentStatus,
        amountPaid: eventfees.amountPaid,
        corperId: corperId,
    }).then( (eventfees) => {
        console.log("Event fees recorded:" + JSON.stringify(eventfees, null,4));
        return eventfees;
    }).catch((err) => {
        console.log("Errow while recording Event Fees: " + err);
    })
}
ProfilePic.