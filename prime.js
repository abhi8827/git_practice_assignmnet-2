function prime( number )
{

let factor = 0;
for ( let i=1;i<=number;i++)
{
    if(number%i==0){ factor++; }
}
factor==2?console.log("Yes Prime "): console.log("Not Prime");

}

console.log(prime(60));