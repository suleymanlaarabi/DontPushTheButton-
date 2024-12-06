async function coucou() {
  return await new Promise((resolve) => {
    setTimeout(() => {
      console.log("coucou");
      resolve(undefined);
    }, 2000);
  });
}

function papa() {
  console.log("papa");
}

coucou();
papa();
