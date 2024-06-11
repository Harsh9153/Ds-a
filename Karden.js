let array=[3,1,-6,2,-11,16]
let sum=0
let max=3

for(i=0;i<array.length;i++)
    {
        sum=sum+array[i]
        if(max<3)
            {
                sum=0
            }
            if(sum>max)
                {
                    // sum=max
                    max=sum
                }
    }
    console.log(max);