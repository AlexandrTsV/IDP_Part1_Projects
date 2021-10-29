using System;
using System.Collections.Generic;
using System.Text;

using UnityTest.Interfaces;

namespace UnityTest.Ducks
{
    public class SimpleDuck : IDuck
    {
        public void Quack()
        {
            Console.WriteLine("Quack!");
        }
    }
}
