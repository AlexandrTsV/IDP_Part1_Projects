using System;
using System.Collections.Generic;
using System.Text;

using UnityTest.Interfaces;

namespace UnityTest.Generic
{
    public class WeirdGeneric<T> : IGeneric<T>
    {
        public T Field { get; set; }

        public void FieldSound()
        {
            Console.WriteLine("Wow, not {0}", typeof(T));
        }
    }
}
