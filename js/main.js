window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    // Bind the button click event to the sayHello function
    document.getElementById('helloButton').addEventListener('click', () => {
        const hello = sayHello();
        document.getElementById('output').textContent = hello;
        alert(hello);
        console.log(hello);
    });
}

/**
 * This function returns the string 'hello'
 * @return {string} the string hello
 */
export function sayHello() {
    return 'hello';
}

