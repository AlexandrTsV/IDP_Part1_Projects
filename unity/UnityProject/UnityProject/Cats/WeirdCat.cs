using System;
using System.Collections.Generic;
using System.Text;

using UnityTest.Interfaces;

namespace UnityTest.Cats
{
    public class WeirdCat : ICat
    {
        public void Meow()
        {
            Console.WriteLine("Woem!");
        }
    }
}
