var arr = [1,2,3,4];
var n =4
var brr = [1,2,3,4,5,6];
var m= 6
 for (let i = 0; i < n; i++)
        {
            let j;
               
            for (j = 0; j < m; j++)
                if (arr[i] == brr[j])
                    break;
   
            if (j == m)
                console.log(arr[i])
        }