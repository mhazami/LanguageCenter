﻿using DataStructure;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class ConnectionHandler : DbContext
    {
        public ConnectionHandler() : base("name=LanguageCenterConnectionString") { }

        public virtual DbSet<File> Files { get; set; }

        public virtual DbSet<User> Users { get; set; }
    }
}
