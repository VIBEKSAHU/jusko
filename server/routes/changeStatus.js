const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function changeStatus(applicantId, newStatus, token) {
  console.log(applicantId,newStatus);
  if (typeof applicantId != String) applicantId = applicantId.toString();
  // const usr = await db.user.findUnique({
  //   where: {
  //     token: token,
  //   },
  // });

  // if (!usr) {
  //   return { flag: false, message: "Bad Request" };
  // } else if (
  //   usr.role == "hod" ||
  //   usr.role == "depot_manager" ||
  //   usr.role == "customer" ||
  //   usr.role == "d2d"
  // ) {
  //new change,customer can also change status
  try {
    const application = await db.customer.update({
      where: {
        id: applicantId,
      },
      data: {
        status: newStatus,
      },
    });

    return {
      flag: true,
      message: `Successfully submitted.`,
      // message: `Success, status changed to ${newStatus}`,
    };
  } catch (e) {
    return {
      flag: false,
      message: `Not changed error: ${e.message}`,
    };
  }
  // } else {
  //   return {
  //     flag: false,
  //     message: "Access Denied",
  //   };
  // }
}

module.exports = { changeStatus };
