const sailboat = function(n){
    if(typeof n === 'number'){
        if(n>=0){

            const sail = 5 + n;
            const body = 4 + n;
            const space = 4 + n;
            const num = 4 + n;

            const spaceDraw = function (space){


                if(space<=0){
                    return '';
                }

                return ' ' + spaceDraw(space-1);
            }

            const sailDraw = function(n){
                const draw = function(num){
                    if(num<=0){
                        return '';
                    }

                    const result = '*' + draw(num-1);
                    return result;
                }

                const sailLoop = function(n,num){
                    if(n<=0){
                        return spaceDraw(space) + '*';
                    }

                    console.log(spaceDraw(space) + draw(num));
                    return sailLoop(n-1,num+1);
                }

                return sailLoop(n,1);
            }

            console.log(sailDraw(sail));

            const drawBody = function(n){
                const rowStars = function(starCount){

                    if(starCount <= 0){
                        return '';
                    }

                    const row = '*' + rowStars(starCount -1);
                    return row;
                }

                const columnSpace = function(columnCount){

                    if(columnCount >= n){
                        return '';
                    }

                    const a = ' ' + columnSpace(columnCount+1);
                    return a;
                }

                const draw = function(columnCount,n){

                    const a = columnSpace(columnCount) + rowStars(n+n+1);
                    return a;
                }

                const loop = function(n){

                    if(n <= 1){
                        return '';
                    }

                    console.log(draw(n,n));
                        return loop(n-1);
                }

                const result = loop(n);
                return result;
            }

            console.log(drawBody(body))
            return '';
        }
    }
}
