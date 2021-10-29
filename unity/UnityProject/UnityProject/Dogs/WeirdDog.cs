using System;
using System.Collections.Generic;
using System.Text;

using UnityTest.Interfaces;

namespace UnityTest.Dogs
{
    public class WeirdDog : IDog
    {
        public void Bark()
        {
            Console.WriteLine("Krab!");
        }
    }
}
