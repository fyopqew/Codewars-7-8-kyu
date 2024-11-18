function enough($cap, $on, $wait) {
    let stack = $cap - $on;
    if (stack >= $wait) {
      return 0;
    } 
    else {
      return $wait - stack;
    }
  }