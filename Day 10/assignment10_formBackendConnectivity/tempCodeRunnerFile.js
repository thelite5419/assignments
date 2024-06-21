pool.query('SELECT * FROM users', (err, result) => {
    if (err) {
      console.log("Error while executing query:", err.message);
      return;
    }
    console.log(result);
    connection.release();
  });