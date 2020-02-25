let arraySample = [100,20,56,6,892,12];
let max =arraySample[0];
for (i=1;i<arraySample.length;i++){
    if (arraySample[i]>max) {
        max = arraySample[i];
    }

}
document.write('Gia tri lon nhat trong mang da cho la '+max);