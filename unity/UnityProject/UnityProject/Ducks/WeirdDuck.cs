using System;
using System.Collections.Generic;
using System.Text;

using UnityTest.Interfaces;

namespace UnityTest.Ducks
{
    public class WeirdDuck : IDuck
    {
        public void Quack()
        {
            Console.WriteLine("Kcauq!");
        }
    }
}
