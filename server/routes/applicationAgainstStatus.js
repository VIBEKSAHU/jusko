const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

function rateCat(rateCategory, categoryId) {
  for (let i = 0; i < rateCategory.length; i++) {
    if (rateCategory[i].id == categoryId) {
      rateCategory[i]["cat_id"] = rateCategory[i]["id"];
      delete rateCategory["id"]; // Delete old key
      return rateCategory[i];
    }
  }
}

function subCat(subCategory, subCategoryId) {
  for (let i = 0; i < subCategory.length; i++) {
    if (subCategory[i].id == subCategoryId) {
      subCategory[i]["sub_cat_Id"] = subCategory[i]["id"];
      delete subCategory["id"];
      return subCategory[i];
    }
  }
}

function classify(classification, id) {
  for (let i = 0; i < classification.length; i++) {
    if (classification[i].id == id) {
      classification[i]["classification_id"] = classification[i]["id"];
      delete classification["id"];
      return classification[i];
    }
  }
}

function applicationFormatter(
  applications,
  rateTable,
  rateCategory,
  subCategory,
  classification
) {
  if (rateTable) {
    // console.log(rateTable);
    let NR = [];
    for (let i = 0; i < rateTable.length; i++) {
      let id = rateTable[i].customer_id;
      let category = rateCat(rateCategory, rateTable[i].matrix_rate_id);

      let sub_category = subCat(subCategory, category.sub_category_id);
      let classi = classify(classification, sub_category.category_id);
      for (let j = 0; j < applications.length; j++) {
        let temp = {};
        if (applications[j].id == id) {
          let customer_entry_date = applications[j].entry_date;
          let customer_id_appl = applications[j].customer_id;
          let matrix_id = rateTable[i].id;
          // console.log("matched");
          let c = applications[j];
          let r = rateTable[i];
          temp = {
            ...c,
            ...r,
            ...category,
            ...sub_category,
            ...classi,
            matrix_id,
            customer_entry_date,
            customer_id_appl
          };
          NR.push(temp);
          applications.splice(j, 1);
          break;
        }
      }
    }
    let data = {
      applications: [...NR],
    };
    // console.log(data);
    return [...applications, ...NR];
  } else {
    return [...applications];
  }
}



async function applicationAgainstStatus(status) {

  const rateChart = await db.matrix_customer_rate.findMany();
  const rateCategory = await db.matrix_rate_category.findMany();
  const subCategory = await db.master_customer_sub_classification.findMany();
  const classification = await db.master_customer_classification.findMany();

  const applicants = await db.customer.findMany({
    where: {
      status: status,
    },
  });

  let newAppli = applicationFormatter(
    applicants,
    rateChart,
    rateCategory,
    subCategory,
    classification
  );

console.log("Applications Customer ID :: "+applicants.application_no);
  
let application = [];
  for (let i = 0; i < newAppli.length; i++) {
    // if (usr.zones.includes(newAppli[i].pickup_zone)) {
    application.push(newAppli[i]);
    // }
  }
  // console.log("applicaion", application);

  return {
    flag: true,
    message: "Success",
    data: application,
  };
}



module.exports = applicationAgainstStatus;
