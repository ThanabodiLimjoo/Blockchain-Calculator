pragma solidity ^0.8.0;

contract Calculator{
    int x;
    int y;

    function get_value(int _x,int _y) public{
        x = _x;
        y = _y;
    } 

    function plus()view public returns (int){
        return x+y;
    } 
    function minus()view public returns (int){
        return x-y;
    }
    function multiplied()view public returns (int){
        return x*y;
    } 
    function division()view public returns (int){
        return x/y;
    }
}